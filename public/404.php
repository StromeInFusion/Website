<!-- Content Container -->
<div class="container">
    <br/>
    <br/>
    <br/>
    <div class="bg_grnd bg_grnd_solid">
        <div class="content_holder">
            <div class="top-page-panel top-page-panel-visible">
                <div class="frame clearfix">
                    <div class="tpp-heading">
                        <h1 class="orange">Oops! That page couldn't be found.</h1>
                        <strong>
                            Want to play some Pacman instead?
                        </strong>
                    </div>
                </div>
            </div>
            <div class="frame holder-404">
                <div class="page-navigation page-navigation-float">
                    <span class="prev-page prev-link" onclick="javascript:history.go(-1);"><span>Go Back</span></span>
                </div>
                <div class="flexible-frame">
                    <div id="flash-404">
                        <div align="center">
                            <a href="http://www.adobe.com/go/getflashplayer">
                                <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/production.js"></script>
    <script type="text/javascript" src="js/swfobject2.js"></script>
    <script type="text/javascript">
        //<!--
        function detectflash() {
            if (navigator.plugins != null && navigator.plugins.length > 0) {
                return navigator.plugins["Shockwave Flash"] && true;
            }
            if (~navigator.userAgent.toLowerCase().indexOf("webtv")) {
                return true;
            }
            if (~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")) {
                try {
                    return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
                } catch (e) {
                }
            }
            return false;
        }
        if (!detectflash()) {
            document.getElementsByTagName('html')[0].className = 'no-flash';
        }

        var flashvars = {};
        var params = {};
        params.quality = "high";
        params.wmode = "transparent";
        var attributes = {};
        //attributes.id = "flash-404";
        attributes.name = "name";
        swfobject.embedSWF("swf/pacman.swf", "flash-404", "977", "500", "10.0.0", "/swf/expressinstall.swf", flashvars, params, attributes);
        //-->
    </script>
</div>