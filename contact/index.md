---
layout: default
title: Shoot Me a Note
---

{% if site.data.work_status contains 'unavailable' %}  
I am currently {{site.data.work_status}} for work, but I always reply to emails and messages. <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%63%6F%6C%65%40%74%77%6E%73%6E%64%2E%63%6F">Let's talk</a>.
{%else %} 
I am taking on new work! You can <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%63%6F%6C%65%40%74%77%6E%73%6E%64%2E%63%6F">email me</a> or use the form below.
{% endif %}
<br>
<hr>

<form data-validate="parsley" id="form1" name="form1" class="wufoo topLabel contact" autocomplete="off" enctype="multipart/form-data" method="post" novalidate action="">
  <label>Subject</label>
  <input id="" name="contact-subject" type="text" placeholder="Hi!" value="" tabindex="1" data-required="true" onkeyup="">

  <label>Your Name</label>
  <input id="" name="contact-name" type="text" placeholder="My name is&hellip;" value="" tabindex="2" data-required="true" onkeyup="">

  <label>Your Email</label>
  <input id="" name="contact-email" type="email" placeholder="email@domain.com" value="" tabindex="3" data-required="true" onkeyup="">
  
  <label>Message</label>
  <textarea id="" name="contact-message" style="width:100%;height:150px;" placeholder="Say something!" spellcheck="true" maxlength="1000" tabindex="4" data-required="true" onkeyup=""></textarea>

  <input id="saveForm" name="saveForm" class="btn" type="submit" value="Send Message"/>

  <ul class="hidden">
    <li>
      <label for="comment">Do Not Fill This Out</label>
      <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
      <input type="hidden" id="idstamp" name="idstamp" value="+gGfQUcSvFpUxJtjAI6BjFRuhytF7oe6GiFcgU1Jcb8=">
    </li>
  </ul>

</form>