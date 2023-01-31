---
title: "Safe Database Migrations"
date: "January 31, 2023"
excerpt: "Guidelines to follow when performing database migrations in production applications to avoid downtime and data loss."
card_image: "/images/posts/database-migrations-in-production-card.png"
banner_image: "/images/posts/database-migrations-in-production-banner.png"
keywords: [
  # todo: add keywords
]
---

So you've deployed your application to production and your users expect it to work properly, every time they log in.

As you receive user feedback and more business requirements are identified, the data entities in your database that support your application may need to change. 

During this maintenance phase of a peice of software, devs needs to be careful when making changes to the database to avoid downtimes and crashes that may make customers lose faith in the product.

## What do I mean by this?
Imagine you create a migration on your production database to remove a column. If the application code has not been deployed to deal with this database change, it will likely cause a crash from a null reference exception.

You might say, 

"Why not just make sure the database change and the code change goes out all at once?" 

With small applications this could work if there is only one machine running the database and app code respectively. You are bound to have a little bit of downtime when the VM is restarting anyway.

However, it is not unusual to have more than one virtual machine or container running your application. If we were to rely on pushing the migration and code at the same time, you would need to take down your entire cluster, migrate the database, then start the cluster again. Otherwise, you might have some clients running on the old code which will break on the migrated database.

## What To Do?
Thankfully, there are good procedures to any sort of database migration safely and incrementally. From here on out, we're going to refer to columns, tables and schemas as <i>database identifiers</i>.

#### Additive Migrations
Additive migrations are when you are adding database identifiers. These are generally always safe migrations as your old code won't need to depend on it.

#### Deletion Migrations
Deleting database identifiers is where it can is dangerous. The best way to handle this is to first change your app code to no longer reference these entities. Push the code. Then, perform the deletion migration after all the app code has been updated.

#### Renaming Migrations
Renaming database identifiers can also be very dangerous. One way to do this is to create the renamed column as a new column (as an additive migration), and change the code to reference the new column. Push the code. Then, copy over all the data from the original column to the new column, then perform the deletion migration on the old column.

#### When Is it Worth A Migration?
So yes, you can do deletion and renaming migrations safely, but it possibly requires lots of refactoring, not just within your app, but also with any other software integrations. However, it is important to know when it is worth doing them, especially when there is a risk of breaking your app.

Do you really need to rename first_name to f_name? If you're deleting a column, ask yourself if you should have created the column in the first place.

Always avoid doing a dangerous migration when it is not absolutely necessary, and give lots of thought into naming and typing your database columns when you create them to avoid having to change things in the future.