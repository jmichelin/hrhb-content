# Browser security

## Same-origin and CORS

* [Same-origin policy](https://www.sitepoint.com/working-around-origin-policy/) --

<table width="100%" cellspacing="2" cellpadding="3" bordercolor="#666666" border="1" style="background-color: #cccccc;">
   <tbody>
      <tr>
         <td><strong>URL</strong></td>
         <td><strong>Same Origin?</strong></td>
         <td><strong>Reason</strong></td>
      </tr>
      <tr>
         <td>http://www.example.com/other.html</td>
         <td>Yes</td>
         <td>Same protocol and host</td>
      </tr>
      <tr>
         <td>http://www.example.com/subdir/other.html</td>
         <td>Yes</td>
         <td>Same protocol and host</td>
      </tr>
      <tr>
         <td>http://www.example.com:81/other.html</td>
         <td>No</td>
         <td>Same protocol and host but different port</td>
      </tr>
      <tr>
         <td>https://www.example.com/other.html</td>
         <td>No</td>
         <td>Different protocol</td>
      </tr>
      <tr>
         <td>http://en.example.com/other.html</td>
         <td>No</td>
         <td>Different host</td>
      </tr>
      <tr>
         <td>http://example.com/other.html</td>
         <td>No</td>
         <td>Different host</td>
      </tr>
      <tr>
         <td>http://v2.www.example.com/other.html</td>
         <td>No</td>
         <td>Different host</td>
      </tr>
   </tbody>
</table>

* [Working With and Around the Same-Origin Policy](https://www.sitepoint.com/working-around-origin-policy/) -- Critical that you know about same-origin stuff, or you will be mystified when, for example, your web fonts specified in your CSS don't load sometimes.
* [Understanding CORS](https://spring.io/understanding/CORS) -- super-useful and in common use nowadays, e.g., by 3rd-party tracking services like Mixpanel and Amplitude, to ping their servers with events from your site.

## XSS etc

* [Hacksplaining](https://www.hacksplaining.com/) Fun, free site with quick hits on all the common security holes. Don't spend a TON of time here at first, but do zip through the modules on XSS, CSRF, SQL injection.
