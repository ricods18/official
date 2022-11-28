
<div id="disqus_thread"></div>
<script>
  window.addEventListener('message', receiveMessage, false);

  function receiveMessage(event) {
    if (event.data) {
      var msg;
      try {
        msg = JSON.parse(event.data);
      } catch (err) {}
      if (!msg)
        return false;
      if (msg.name === 'resize') {
        window.parent.postMessage({
          sentinel: 'amp',
          type: 'embed-size',
          height: msg.data.height
        }, '*');
      }
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return (false);
  }
  
    var css = '#disqus_thread {font-family:' + getQueryVariable('fontBodyFamily') + '} a {color:#' + getQueryVariable('fontLinkColor') + '}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    var disqus_shortname = getQueryVariable('shortname');
    var disqus_config = function () {
        this.page.url = getQueryVariable('canonicalurl');
        this.page.identifier = '';
        this.page.title = getQueryVariable('title');
    };
    
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');
        
        s.src = '//'+disqus_shortname+'.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
