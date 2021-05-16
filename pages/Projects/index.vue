<template>
    <div id="page">
        <div class="header">
            <div class="body">
                <div class="container">
                    <h1>Projects</h1>
                    <ul>
                        <li>
                            <nuxt-link to="/projects/project1">
                                <img src="@/assets/images/curious-rover.jpg" alt="">
                            </nuxt-link>

                            <div>
                                <h1>MARS CURIOSITY ROVER</h1>
                                <p>
                                    Our website templates are created with inspiration, checked
                                    for quality and originality and meticulously sliced and coded.
                                    What’s more, they’re absolutely free! You can do a lot with
                                    them. You can modify them. You can use them to design websites
                                    for clients, so long as you agree with the Terms of Use.
                                </p>
                                <nuxt-link to="/projects/project1" class="more">
                                    Read More
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/projects/project2">
                                <img src="@/assets/images/space-station.jpg" alt="">
                            </nuxt-link>

                            <div>
                                <h1>INTERTERNATIONAL SPACE STATION</h1>
                                <p>
                                    Looking for more templates? Just browse through all our Free
                                    Website Templates and find what you’re looking for. But if you
                                    don’t find any website template you can use, you can try our
                                    Free Web Design service and tell us all about it. Maybe you’re
                                    looking for something different, something special.
                                </p>
                                <nuxt-link to="/projects/project2" class="more">
                                    Read More
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
}

.header {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 808px;
    background-color: #000000;
}

.container {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 940px;
}

/* .header > .body {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 940px;
} */

.container > h1 {
    display: block;
    margin: 65px auto 87px;
    padding: 0;
    width: 940px;
    font-size: 36px;
    font-family: audiowide-regular-webfont, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 36px;
    text-transform: uppercase;
}

.container ul {
    display: inline-block;
    margin: 0;
    padding: 3px 10px 0;
    max-width: 940px;
    list-style: none outside none;
}

.container ul li {
    display: block;
    overflow: hidden;
    padding: 0 0 38px;
    margin-bottom: 20px;

    /* border: none; */
}

.container ul li:first-child {
    border-bottom: 1px solid oldlace;
}

.container ul li div {
    float: right;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 520px;
}

.container ul li > a {
    display: block;
    float: left;
    margin: 0 40px 0 0;
    padding: 0;
    width: 340px;
    height: 217px;
}

.container img {
    display: block;
    width: 100%;
}

.container ul li div h1 {
    margin: 0 0 26px;
    padding: 0;
    width: 520px;
    font-size: 23px;
    font-family: audiowide-regular-webfont, Arial, Helvetica, sans-serif;
    font-weight: normal;
    text-align: left;
    color: #a3a3a3;
    line-height: 23px;
    text-transform: uppercase;
}

.container ul li div p {
    margin: 0 0 41px;
    padding: 0;
    width: 520px;
    font-size: 14px;
    font-family: Arial, serif;
    font-weight: normal;
    text-align: left;
    color: #ffffff;
    line-height: 24px;
}

.container ul li div a.more {
    display: block;
    float: right;
    margin: 0;
    padding: 0;
    width: 120px;
    height: 31px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    background-color: #3c0f38;
    line-height: 31px;
    text-transform: uppercase;
}
</style>
