# bg-questers

A site for the taking.



Аlthough the name of the app is bg-questers, the main logic so far is in the Raids*(see below) Module. 
I realized that Quests Module, by my business logic have to be managed by admin.
I used firebase for the backend, but the admin functionality is mocked by the Auth Service(the admin has email test1@test1.com).
BgQuesters routes are:  

	-"", "home" -> passive page. No backend call. No Authentication.

	-raids

	---"", "all" => a list of all raids.Has call to the base.(Used bootstrap rows and cols)

	---"create" => commits a raid. Has call to the base. (Reactive form.)

	---"edit/:id" => edits a raid. Has call to the base.Guarded to be used by: the author . (Reactive form.) 

	---"dalete/:id" => a form that is not reactive or template driven.AuthGuard | AdminGuard. The data flow is one way, towards the html, just to show the data in the form, before it can be deleted. All fields are disabled.

	---"details/:id" => Not Guarded.

---------------------------------------------------------------------------------------

 * raid: I tried making the analog with WOW (to be honest I've never played it).A raid in the app is some activity,
 for a random number of people, which has a goal (a community  or humanitarian service). For example: Clean the nearby park ; 
 Entertain old people ect. At least that is it's purpose. If the app grows, it will probably end up as a way to organize small beerfests :D.