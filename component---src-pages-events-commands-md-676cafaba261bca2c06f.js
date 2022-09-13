"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[242],{46793:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return p}});var t=a(87462),m=a(63366),r=(a(15007),a(64983)),d=a(91515),i=["components"],s={},o={_frontmatter:s},l=d.Z;function p(e){var n=e.components,a=(0,m.Z)(e,i);return(0,r.mdx)(l,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"eventing-commands"},"Eventing commands"),(0,r.mdx)("p",null,"Adobe I/O Events allow you to receive notifications of real-time events taking place in Adobe services."),(0,r.mdx)("p",null,"Adobe Commerce provides the following commands to configure and process events:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Enable integration between Commerce and Adobe I/O events"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#create-an-event-provider"},"events:create-event-provider"),"  "))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Manage events subscriptions"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#subscribe-to-a-commerce-event"},"events:subscribe")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#create-event-metadata-in-adobe-io"},"events:metadata:populate")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#unsubscribe-from-a-commerce-event"},"events:unsubscribe")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#list-subscribed-commerce-events"},"events:list")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Manage registrations"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#create-a-registration"},"events:registration:create")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#delete-a-registration"},"events:registration:delete")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#get-registration-details"},"events:registration:get-all")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Generate a Commerce module"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#generate-a-commerce-module-based-on-a-list-of-subscribed-events"},"events:generate:module"))))),(0,r.mdx)("h2",{id:"create-an-event-provider"},"Create an event provider"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:create-event-provider")," command creates an event provider ID in Adobe IO Events and displays this ID. Add the generated ID as the value of the ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Configuration > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe IO Events")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Event Provider ID")," field in the Commerce Admin."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"--label")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"--description")," arguments are optional. However, if you do not specify them, then you must create a system ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/etc/event-types.json")," file and define the values in that file before running the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:create-event-provider")," command. We recommend specifying the ",(0,r.mdx)("inlineCode",{parentName:"p"},"--label")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"--description")," arguments when you run the command."),(0,r.mdx)("p",null,"If you decide to omit the arguments, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"event-types.json")," file must have the following format:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "provider": {\n     "label": "My Adobe Commerce Events",\n     "description": "Provides out-of-process extensibility for Adobe Commerce"\n     }\n }\n')),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},'bin/magento events:create-event-provider --label "<unique provider label>" --description "<provider description>"')),(0,r.mdx)("h3",{id:"arguments"},"Arguments"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"--label")," A name that distinguishes your event provider from others in the project."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"--description")," A string that describes your event provider."),(0,r.mdx)("h3",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento events:create-event-provider --label "My new event provider" --description "Event provider in the Stage workspace"\n')),(0,r.mdx)("h3",{id:"response"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"No event provider found, a new event provider will be created\n\nA new event provider has been created with ID <ID>.\n")),(0,r.mdx)("h2",{id:"subscribe-to-a-commerce-event"},"Subscribe to a Commerce event"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:subscribe")," command subscribes the current provider to the specified event. You must define the event code using the following pattern:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"<type>.<event_name>\n")),(0,r.mdx)("p",null,"where:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type")," specifies the origin of the event. Specify ",(0,r.mdx)("inlineCode",{parentName:"li"},"observer")," if the event is emitted by a Commerce observer, or specify ",(0,r.mdx)("inlineCode",{parentName:"li"},"plugin")," if the event is emitted by a plugin."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"event_name")," identifies the event to subscribe. For example: ",(0,r.mdx)("inlineCode",{parentName:"li"},"catalog_product_save_after"),".")),(0,r.mdx)("h3",{id:"usage-1"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:subscribe <event_code>")),(0,r.mdx)("h3",{id:"arguments-1"},"Arguments"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<event_code>")," Required. Specifies the event to subscribe to. The value must in the format ",(0,r.mdx)("inlineCode",{parentName:"p"},"<type.event_name>"),"."),(0,r.mdx)("h3",{id:"example-1"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:subscribe observer.customer_login\n")),(0,r.mdx)("h3",{id:"response-1"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"The subscription observer.customer_login was successfully created\n")),(0,r.mdx)("h2",{id:"unsubscribe-from-a-commerce-event"},"Unsubscribe from a Commerce event"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:unsubscribe")," command causes the current provider to unsubscribe from the specified event. Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:list")," command to retrieve a list of subscribed events."),(0,r.mdx)("h3",{id:"usage-2"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:unsubscribe <event_code>")),(0,r.mdx)("h3",{id:"arguments-2"},"Arguments"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<event_code>")," Required. Specifies the event to unsubscribe from."),(0,r.mdx)("h3",{id:"example-2"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:unsubscribe observer.catalog_product_save_after\n")),(0,r.mdx)("h3",{id:"response-2"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully unsubscribed from the `observer.catalog_product_save_after` event\n")),(0,r.mdx)("h2",{id:"list-subscribed-commerce-events"},"List subscribed Commerce events"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:list")," command returns a list of subscribed events."),(0,r.mdx)("h3",{id:"usage-3"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:list")),(0,r.mdx)("h3",{id:"example-3"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:list\n")),(0,r.mdx)("h3",{id:"response-3"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"observer.catalog_product_save_after\nobserver.customer_login\n")),(0,r.mdx)("h2",{id:"create-a-registration"},"Create a registration"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:registration:create")," command registers the merchant to Adobe Identity Management Services. You must configure the ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Configuration > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Events")," > ",(0,r.mdx)("strong",{parentName:"p"},"Commerce Events")," > ",(0,r.mdx)("strong",{parentName:"p"},"Merchant ID")," and ",(0,r.mdx)("strong",{parentName:"p"},"Environment ID")," fields before running this command."),(0,r.mdx)("h3",{id:"usage-4"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:create <ims-org-id>")),(0,r.mdx)("h3",{id:"arguments-3"},"Arguments"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<ims-org-id>")," Required. A 24-digit hexadecimal ID followed by the string ",(0,r.mdx)("inlineCode",{parentName:"p"},"@AdobeOrg"),". Go to the Service Account (JWT) page of your workspace in the Adobe Console to view this value. Example value: ",(0,r.mdx)("inlineCode",{parentName:"p"},"12345678901234567890ABCD@AdobeOrg"),"."),(0,r.mdx)("h3",{id:"example-4"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:create 12345678901234567890ABCD@AdobeOrg\n")),(0,r.mdx)("h3",{id:"response-4"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"Registration created\n")),(0,r.mdx)("h2",{id:"delete-a-registration"},"Delete a registration"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:registration:delete")," command deletes the specified registrant from the IMS organization."),(0,r.mdx)("h3",{id:"usage-5"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:delete <registration-id>")),(0,r.mdx)("h3",{id:"arguments-4"},"Arguments"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<registration-id>")," Required. The ID assigned to the registration. Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:registration:get-all")," command to retrieve the ID."),(0,r.mdx)("h3",{id:"example-5"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:delete e037f0de-3489-49c7-9366-df86491072b4\n")),(0,r.mdx)("h3",{id:"response-5"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"Registration was deleted\n")),(0,r.mdx)("h2",{id:"get-registration-details"},"Get registration details"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:registration:get-all")," command returns details about a registrant. The response includes the registration ID, merchant ID, environment ID, IMS organization ID, and instance ID."),(0,r.mdx)("h3",{id:"usage-6"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:get-all")),(0,r.mdx)("h3",{id:"example-6"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:get-all\n")),(0,r.mdx)("h3",{id:"response-6"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},'+--------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| e037f0de-3489-49c7-9366-df86491072b4 | {"id":"e037f0de-3489-49c7-9366-df86491072b4","merchant_id":"extension-docs","environment_id":"extension-docs","ims_org_id":"12345678901234567890ABCD@AdobeOrg","instance_id":"extensibility-docs2","event_provider_metadata":"3rd_party_custom_events"} |\n+--------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,r.mdx)("h2",{id:"create-event-metadata-in-adobe-io"},"Create event metadata in Adobe I/O"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:metadata:populate")," command creates event metadata based on XML and application configurations."),(0,r.mdx)("h3",{id:"usage-7"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"events:metadata:populate")),(0,r.mdx)("h3",{id:"example-7"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:metadata:populate\n")),(0,r.mdx)("h3",{id:"response-7"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"The events metadata was successfully created:\n")),(0,r.mdx)("h2",{id:"generate-a-commerce-module-based-on-a-list-of-subscribed-events"},"Generate a Commerce module based on a list of subscribed events"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:generate:module")," command generates a module with plugins based on your configuration and places it into the Commerce ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/AdobeCommerceEvents")," directory."),(0,r.mdx)("h3",{id:"usage-8"},"Usage"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:generate:module")),(0,r.mdx)("h3",{id:"example-8"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:generate:module\n")),(0,r.mdx)("h3",{id:"response-8"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"Module was generated in the app/code/Magento directory\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-commands-md-676cafaba261bca2c06f.js.map