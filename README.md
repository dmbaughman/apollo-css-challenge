# Apollo CSS exercise

The scenario for this exercise is that we just received some design mockups from our agency and we would like you to jump in and help write the styles for these buttons.  The issue ID for this feature request in Jira is **apollo-24**.

The mockup image you should use as reference is included in this repo as **button-spec.jpg**.  It includes some annotations for sizing, but as usual, the annotations are far from comprehensive.  Just do your best to make it look like the mockup--we're mostly interested in the way you write and organize your code.

## Requirements

- Create a set of classes that apply the desired styles to all the elements on the `index.html` page so they appear identical.
- Use colors from the color palette to match designs as closely as possible.  Where exact matches don't exist in the palette, you may lighten or darken colors from the palette to approximate the mockup.  We're not testing your color matching here, so just make it look close.
- Ensure that the buttons look correct when used on a dark background.
- Include styles for small (compact) size variation.
- Give all state changes a consistent, smooth transition (e.g. hover, active).j

_Note: The shadows for the button hover state are included in the `_variables.scss` module._

## Setup

Run `npm install` to install the project dependencies (requires gulp installed globally) and then `gulp serve` to run the development server.

## Workflow

Treat this as a work project and use Git the way you would at work.  We are using a Git workflow as [described here](http://nvie.com/posts/a-successful-git-branching-model/) on this project.  Your work should be submitted as a pull request to the **development** branch.

## Caveats

- Font from mockup is Proxima Nova, but don't worry about that matching
- Ignore the annoying reverb animation thing
- The four elements per row do not correspond to the four states, so when loading the page the first group should all look blue (default primary) and the second group should all be white with a gray border (default secondary)

## Resources

- A basic gulpfile is included with SCSS compilation and livereload for when stylesheets are updated.
- Bootstrap v4.0.0-alpha.2 is included as a resource.  Check out the imports in `apollo.scss` to see what's included.

## Bonus (optional)

Add styles to account for the touchscreen and long label styles.  We'd prefer not to use additional classes for these two, so how would you approach this problem?
