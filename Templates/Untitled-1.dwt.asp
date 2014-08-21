<%@LANGUAGE="JAVASCRIPT" CODEPAGE="65001"%>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<!-- TemplateBeginEditable name="doctitle" -->
<title>Untitled Document</title>
<!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="head" -->
<!-- TemplateEndEditable -->
<link rel="stylesheet" href="../thrColFix.css" type="text/css"></head>

<body>

<div class="container">
  <div class="sidebar1">
    <ul class="nav">
      <li><a href="#">Link one</a></li>
      <li><a href="#">Link two</a></li>
      <li><a href="#">Link three</a></li>
      <li><a href="#">Link four</a></li>
    </ul>
    <p> The above links demonstrate a basic navigational structure using an unordered list styled with CSS. Use this as a starting point and modify the properties to produce your own unique look. If you require flyout menus, create your own using a Spry menu, a menu widget from Adobe's Exchange or a variety of other javascript or CSS solutions.</p>
    <p>If you would like the navigation along the top, simply move the ul.nav to the top of the page and recreate the styling.</p>
    <!-- end .sidebar1 --></div>
  <div class="content">
    <h1>Instructions</h1>
    <p>Be aware that the CSS for these layouts is heavily commented. If you do most of your work in Design view, have a peek at the code to get tips on working with the CSS for the fixed layouts. You can remove these comments before you launch your site. To learn more about the techniques used in these CSS Layouts, read this article at Adobe's Developer Center - <a href="http://www.adobe.com/go/adc_css_layouts">http://www.adobe.com/go/adc_css_layouts</a>.</p>
    <h2>Clearing</h2>
    <p>Because all the columns are floated, this layout uses overflow:hidden on the .container. This clearing technique forces the .container to understand where the columns end in order to show any borders or background colors you place on the .container. If you have a large element that protrudes outside the .container, it will appear to be cut off. You also won't be able to use negative margins or absolute positioning with negative values to pull elements outside the .container or they will also won't display outside the .container.</p>
    <p>If you need to use these properties, you'll need to use a different clearing method. The most reliable will be to add a &lt;br class=&quot;clearfloat&quot; /&gt; or &lt;div  class=&quot;clearfloat&quot;&gt;&lt;/div&gt; after your final floated column (but before the .container closes). This will have the same clearing effect.</p>
    <h3>Footer</h3>
    <p>Adding a footer following the columns, yet still inside the .container, will cause this overflow:hidden clearing method to fail. You can place a .footer into a second .container outside the first one with no detrimental effects. The simplest choice may be to start with a layout containing headers and footers and remove the header to utilize the clearing methods in that layout type.</p>
    <!-- end .content --></div>
  <div class="sidebar2">
    <h4>Backgrounds</h4>
    <p>By nature, the background color on any div will only show for the length of the content. If you'd like a dividing line instead of a color, place a border on the side of the .content div (but only if it will always contain more content).</p>
    <!-- end .sidebar2 --></div>
  <!-- end .container --></div>
</body>
</html>
