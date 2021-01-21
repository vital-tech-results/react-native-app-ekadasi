var id = "";
var date = "";
var lastSeenDate = "";
var psBadge = "";
var base = "";
var fetchBase = "";
var el = "";
setTimeout(function () {
  id = "4f387673-7345-4968-97a7-1714285e3094";
  date = new Date().getTime();
  lastSeenDate = localStorage.getItem("PS_LAST_SEEN") || 0;
  base = "https://app.productstash.io";
  fetchBase = "https://api.productstash.io";

  if (typeof env !== "undefined") {
    if (env === "dev") base = "";
    if (env === "dev") fetchBase = "http://localhost:7000";
  }

  initialize();
}, 1000);

function initialize() {
  var badge = document.getElementById("#productstashBtn");
  //If it isn't "undefined" and it isn't "null", then it exists.
  if (typeof badge != "undefined" && badge != null) {
    return;
  } else {
    psBadge = document.createElement("div");
    psBadge.setAttribute("id", "productstashSelector");
    psBadge.style.cssText =
      "transform:scale(0);opacity: 0;box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);cursor:pointer;transition:all 0.4s;position:fixed;width:60px;height:60px;border-radius:100%;z-index:9999999;bottom:90px;right:20px;display: flex;align-items: center;justify-content: center;";
    document.body.appendChild(psBadge);
    fetch(fetchBase + "/app-config?product_id=" + id)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var img = document.createElement("img");
        img.setAttribute("src", base + "/images/notification.png");
        img.setAttribute("alg", "Widget launched icon");
        img.setAttribute("width", "20");
        psBadge.appendChild(img);

        psBadge.addEventListener("click", function (event) {
          badgeClick();
        });

        var modal = document.createElement("div");
        modal.setAttribute("id", "productstash-modal");
        modal.style.cssText = "display:none;";
        document.body.appendChild(modal);
        modal.addEventListener("click", function (event) {
          closeModal(modal);
        });

        var container = document.createElement("div");
        container.setAttribute("class", "iframe-container");
        modal.appendChild(container);

        var iframe = document.createElement("iframe");
        iframe.setAttribute(
          "src",
          base + "/products/" + id + "/updates?referral=widget"
        );
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "ps_releases");

        container.appendChild(iframe);

        var close = document.createElement("div");
        close.style.cssText =
          "transform:scale(0);transition: transform 0.4s;cursor: pointer;position: absolute;padding:5px;top: 15px;right: 20px;z-index: 2147483647;color: white;font-size: 1.5em;font-weight: 500;background-color: rgba(0, 0, 0, 0.3);width: 35px;height: 35px;border-radius: 50px;text-align: center;";
        close.setAttribute("class", "close-btn");
        close.setAttribute("id", "close-btn");
        close.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" style="margin: auto;position: absolute;top: 0; left: 0; bottom: 0; right: 0;" width="20" viewBox="0 0 30 30" fill="#ffffff"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" fill="#ffffff"/></svg>';

        container.appendChild(close);

        close.addEventListener("click", function (event) {
          closeModal(modal);
        });

        if (!data.success) return;

        if (data.widget && data.widget.active) {
          ps_config.appSettings = data.widget;

          if (ps_config.appSettings.widgetIcon) {
            img.setAttribute("src", ps_config.appSettings.widgetIcon);
          }

          if (ps_config.appSettings.showMobile === false) {
            var styleEl = document.createElement("style");
            styleEl.innerHTML =
              "@media (max-width: 768px){.hidden-md{display: none !important;}}";
            document.head.appendChild(styleEl);
            psBadge.setAttribute("class", "hidden-md");
          }

          if (ps_config.appSettings.buttonPlacement === "left") {
            psBadge.style.left = "20px";
            psBadge.style.bottom = "90px";
          }

          if (ps_config.appSettings.buttonPlacement === "right") {
            psBadge.style.right = "20px";
            psBadge.style.bottom = "90px";
          }

          if (ps_config.appSettings.buttonPlacement === "top-right") {
            psBadge.style.right = "20px";
            psBadge.style.top = "20px";
          }

          if (ps_config.appSettings.buttonPlacement === "top-left") {
            psBadge.style.left = "20px";
            psBadge.style.top = "20px";
          }

          if (ps_config.appSettings.customPositioning === true) {
            psBadge.style.top = ps_config.appSettings.positionTop
              ? ps_config.appSettings.positionTop + "px"
              : "unset";
            psBadge.style.right = ps_config.appSettings.positionRight
              ? ps_config.appSettings.positionRight + "px"
              : "20px";
            psBadge.style.bottom = ps_config.appSettings.positionBottom
              ? ps_config.appSettings.positionBottom + "px"
              : "90px";
            psBadge.style.left = ps_config.appSettings.positionLeft
              ? ps_config.appSettings.positionLeft + "px"
              : "unset";
          }

          if (
            ps_config.appSettings.customSelector &&
            ps_config.appSettings.htmlSelector
          ) {
            customSelector = ps_config.appSettings.htmlSelector;
            customSelector = customSelector.replace(/^#/, "");

            el = document.querySelectorAll("#" + customSelector);
            for (var i = 0; i < el.length; i++) {
              el[i].style.position = "relative";
              el[i].style.display = "flex";
              el[i].addEventListener("click", function (event) {
                badgeClick();
              });
            }

            psBadge.remove();
          } else {
            if (data.widget.color) {
              psBadge.style.background = "#" + data.widget.color;
            } else {
              psBadge.style.background = "#007BFE";
            }
            psBadge.style.opacity = "1";
            psBadge.style.transform = "scale(1)";
          }

          lastSeen(data.date);
        } else {
          psBadge.remove();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function lastSeen(date) {
  if (date > lastSeenDate) {
    var dot = document.createElement("div");
    dot.style.cssText =
      'width: 20px;height: 20px;position: absolute;top: 3px;right: 3px;color: white;text-align: center;font-size: 10px;font-family: "Arial";border-radius: 50%;box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);transform: scale(1);background: red;box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);animation: pulse-red 2s infinite;display: flex;justify-content: center;align-items: center;';
    var dotStyle = document.createElement("style");
    dotStyle.type = "text/css";
    dotStyle.innerHTML =
      "@keyframes pulse-red {0% {transform: scale(0.95);box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);}70% {transform: scale(1);box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);}100% {transform: scale(0.95);box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);}}";
    document.getElementsByTagName("head")[0].appendChild(dotStyle);

    dot.setAttribute("class", "notification-dot");
    dot.innerHTML = '<span class="notification-count">1</span>';
    psBadge.appendChild(dot);

    var menuLink = document.getElementsByClassName("whats-new")[0];
    if (menuLink) {
      var dotClone = dot.cloneNode(true);
      menuLink.appendChild(dotClone);
    }

    if (el) {
      for (var i = 0; i < el.length; i++) {
        var elDot = dot.cloneNode(true);
        elDot.style.cssText =
          'width: 16px;height: 16px;border-radius: 20px;background: red;position: relative;margin-top: -8px;top: 0px;right: 0px;color: white;text-align: center;font-size: 8px;font-family: "Arial";border-radius: 50%;box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);transform: scale(1);background: red;box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);animation: pulse-red 2s infinite;display: flex;justify-content: center;align-items: center;';
        el[i].appendChild(elDot);
      }
    }
  }
}

function badgeClick() {
  localStorage.setItem("PS_LAST_SEEN", date);
  var notification = document.getElementsByClassName("notification-dot")[0];
  if (notification) {
    notification.remove();
  }

  var modal = document.getElementById("productstash-modal");
  if (!modal) return;

  //If it isn't "undefined" and it isn't "null", then it exists.
  // if(typeof(modal) != 'undefined' && modal != null){
  //   alert('here')
  //     modal.style.cssText = 'height: 100%;width: 100%;background:rgba(0,0,0,0);position: fixed;-webkit-transition: opacity .2s ease-in;-o-transition: opacity .2s ease-in;transition: opacity .2s ease-in, background 0.8s;opacity: 1;z-index: 9999999999;top: 0;left: 0;display: block;overflow: hidden;';
  //     modal.style.background = "rgba(0,0,0,0.8)"
  //     setTimeout(function() {
  //       var iframe = document.getElementById("ps_releases");
  //       iframe.style.cssText = 'transition:right 0.4s ease-in-out;background: #fff;position: absolute;height: 100%;border: 0;position: absolute;height: 100%;border: 0;-webkit-box-shadow: 0 0 10px rgba(0,0,0,.2);box-shadow: 0 0 10px rgba(0,0,0,.2);z-index: 2147483638;width:100%;max-width:450px;right:-450px;';
  //       iframe.style.right = "0px";
  //       var c = document.getElementById("close-btn");
  //       c.style.transform = "scale(1)";
  //     }, 100);

  // } else{

  modal.style.cssText =
    "height: 100%;width: 100%;background:rgba(0,0,0,0);position: fixed;-webkit-transition: opacity .2s ease-in;-o-transition: opacity .2s ease-in;transition: opacity .2s ease-in, background 0.8s;opacity: 1;z-index: 9999999999;top: 0;left: 0;display: block;overflow: hidden;";
  modal.style.background = "rgba(0,0,0,0.8)";
  setTimeout(function () {
    var iframe = document.getElementById("ps_releases");
    iframe.style.cssText =
      "transition:right 0.2s ease-in-out;background: #fff;position: absolute;height: 100%;border: 0;position: absolute;height: 100%;border: 0;-webkit-box-shadow: 0 0 10px rgba(0,0,0,.2);box-shadow: 0 0 10px rgba(0,0,0,.2);z-index: 2147483638;width:100%;max-width:450px;right:-450px;";
    iframe.style.right = "0px";
    var c = document.getElementById("close-btn");
    c.style.transform = "scale(1)";
  }, 100);

  var iframe = document.getElementById("ps_releases");
  iframe.style.cssText =
    "transition:right 0.2s ease-in-out;background: #fff;position: absolute;height: 100%;border: 0;position: absolute;height: 100%;border: 0;-webkit-box-shadow: 0 0 10px rgba(0,0,0,.2);box-shadow: 0 0 10px rgba(0,0,0,.2);z-index: 2147483638;width:100%;max-width:450px;right:-450px;";

  var container = document.getElementsByClassName("iframe-container")[0];
  modal.style.background = "rgba(0,0,0,0.8)";

  setTimeout(function () {
    iframe.style.cssText =
      "transition:right 0.2s ease-in-out;background: #fff;position: absolute;height: 100%;border: 0;position: absolute;height: 100%;border: 0;-webkit-box-shadow: 0 0 10px rgba(0,0,0,.2);box-shadow: 0 0 10px rgba(0,0,0,.2);z-index: 2147483638;right: 0;width:100%;max-width:450px;";
  }, 100);

  // }
}

function closeModal(m) {
  var iframe = document.getElementById("ps_releases");
  var c = document.getElementById("close-btn");
  iframe.style.right = "-450px";
  m.style.background = "transparent";
  c.style.transform = "scale(0)";
  setTimeout(function () {
    m.style.cssText =
      "height: 100%;width: 100%;position: fixed;background: rgba(0,0,0,0);-webkit-transition: opacity .2s ease-in;-o-transition: opacity .2s ease-in;transition: opacity .2s ease-in, background 1s;opacity: 1;z-index: 9999999999;top: 0;left: 0;display: none;overflow: hidden;";
  }, 400);
}
