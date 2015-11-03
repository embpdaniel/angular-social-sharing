#Facebook, LinkedIn, Twitter Social Sharing with Angular JS

##Build

This project uses Bower and NPM to load dependencies. Run _npm install_ and _bower install_ in the terminal to get all dependencies installed.

- Run _grunt_ and _grunt serve_ in the console to display the project on browser
- Currently all platforms have http://localhost:9000/ whitelisted and is the only url that can make valid calls to the platform APIs
- You can ignore the api folder, it has PHP setup but we are not using it since these are only client-side implementations.

##Notes on Facebook Sharing

Facebook has plugin buttons that allow for easy sharing of content. Although they are easier to set up (as they come pre-styled) they require
that meta tags are added to the page to properly lay out the content to be shared in the share post. Angular's SPA nature will not work well
with meta tags unless a server-side solution is implemented.

A client-side solution to this problem is through the use of the Facebook Javascript API (used in this POC app). While it is more flexible,
allowing us to control shared page title, description, and thumbnail, it requires that the button is styled from scratch.

##Notes on LinkedIn Sharing

LinkedIn sharing options are very similar to Facebook's options. There are pre-styled plugin buttons that can be used, but again they require
meta tags to be added for the shared content layout.

To get around the meta tag issue there is also a Javascript API alternative to share content (used in this POC app). You can programmatically
set link, title, description, and image thumbnail. The caveat is the API call is low level and requires we build the share modal ourselves where
the data will be set as well as the option to the user whether the share should be visible to their contacts only, or to everyone. The modal
would then call the API method passing the required data to it. This app does not have a modal and simply shares the test content directly.

##Notes on Twitter

To provide custom share titles and image Twitter has the option to use Twitter Cards, which allow for a way to customize the sharing layout. The problem with this is
that there is no Javascript API for this, and requires you to use meta tags which we want to avoid.

Twitter has some options for sharing, but none that give us a complete client-side solution (one with full flexibility). This app includes a sharing option that allows you
to send the link and title/message, but it does not have a way to provide an image.
