<template>
    <div class="footer">
        <div>
            <ul>
                <li>
                    <h1>FEATURED VIDEO</h1>
                    <a
                        href="blog.html"
                    ><img src="@/assets/images/mars-rover.jpg" alt=""><span /></a>
                </li>
                <li>
                    <h1>LATEST BLOG</h1>
                    <ul>
                        <li>
                            <a
                                href="blog.html"
                            ><img
                                src="@/assets/images/finding-planet.jpg"
                                alt=""
                            ></a>

                            <h1>FINDING PLANET X-123</h1>
                            <span>FEBRUARY 6, 2023</span>
                            <a href="blog.html" class="more">Read More</a>
                        </li>
                        <li>
                            <a
                                href="blog.html"
                            ><img
                                src="@/assets/images/new-satellitedish.jpg"
                                alt=""
                            ></a>

                            <h1>NEW SATELLITE DISH</h1>
                            <span>FEBRUARY 3, 2023</span>
                            <a href="blog.html" class="more">Read More</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #000000;
}

.footer div {
    overflow: hidden;
    margin: 0 auto;
    padding: 32px 0 16px;
    max-width: 960px;
}

.footer div ul {
    display: inline-block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: auto;
    list-style: none;
}

.footer div ul li:first-child {
    float: left;
    margin: 0 10px;
    padding: 0;
    width: 430px;
}

.footer div ul li {
    float: left;
    margin: 0 0 0 10px;
    padding: 0 0 0 20px;
    width: 440px;
}

.footer div ul li h1 {
    margin: 0 0 44px;
    padding: 0;
    width: auto;
    font-size: 32px;

    /* font-family: audiowide-regular-webfont; */
    font-weight: normal;
    text-align: left;
    color: #ffffff;
    line-height: 32px;
    text-transform: uppercase;
}

.footer div ul li a {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    width: 460px;
    height: 258px;
}

.footer div ul li a img {
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
    opacity: 1;
    filter: alpha(opacity=100); /* Needed for IE8 and old versions */
    cursor: pointer;
}

.footer div ul li a:hover img {
    opacity: 0.7;
    filter: alpha(opacity=70); /* Needed for IE8 and old versions */
}

.footer div ul li a span {
    position: absolute;
    top: 94px;
    left: 199px;
    display: block;
    margin: 0;
    padding: 0;
    width: 62px;
    height: 72px;
    background: url('@/assets/images/icons.png') no-repeat 0 -152px;
}

.footer div ul li a:hover span {
    background: url('@/assets/images/icons.png') no-repeat 0 -226px;
}

.footer div ul li ul {
    display: inline-block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 440px;
    list-style: none outside none;
}

.footer div ul li ul li {
    float: none;
    overflow: hidden;
    margin: 0;
    padding: 39px 10px 38px 0;
    width: 440px;
    border-top: 1px solid #a3a3a3;
}

.footer div ul li ul li:first-child {
    margin: 0;
    padding: 0 0 38px;
    width: 440px;
    border: medium none;
}

.footer div ul li ul li a {
    display: block;
    float: left;
    margin: 0 20px 0 0;
    padding: 0;
    width: 100px;
    height: 90px;
}

.footer div ul li ul li a img {
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
    opacity: 1;
    filter: alpha(opacity=100); /* Needed for IE8 and old versions */
    cursor: pointer;
}

.footer div ul li ul li a img:hover {
    opacity: 0.7;
    filter: alpha(opacity=70); /* Needed for IE8 and old versions */
}

.footer div ul li ul li h1 {
    float: left;
    margin: 0;
    padding: 4px 0 8px;
    width: 310px;
    font-size: 23px;

    /* font-family: audiowide-regular-webfont; */
    font-weight: normal;
    text-align: left;
    color: #a3a3a3;
    line-height: 23px;
    text-transform: uppercase;
}

.footer div ul li ul li span {
    display: block;
    float: left;
    margin: 0 0 10px;
    padding: 0;
    width: 310px;
    font-size: 14px;

    /* font-family: Arial; */
    font-weight: normal;
    text-align: left;
    color: #ffffff;
    line-height: 14px;
    text-transform: uppercase;
}

.footer div ul li ul li a.more {
    display: block;

    /* float: right; */
    margin: 0;
    margin-left: 150px;
    padding: 0;
    width: 120px;
    height: 31px;
    font-size: 14px;

    /* font-family: Arial; */
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    background-color: #3c0f38;
    line-height: 31px;
    text-transform: uppercase;
}

.footer div ul li ul li a.more:hover {
    background-color: #620031;
}
</style>
