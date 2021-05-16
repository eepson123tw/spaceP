<template>
    <div id="page">
        <div id="body" class="home">
            <div class="header">
                <div>
                    <img src="@/assets/images/satellite.png" alt="" class="satellite">
                    <h1>SOYUZ TMA-M</h1>
                    <h2>SPACECRAFT</h2>
                    <a href="blog.html" class="more">Read More</a>
                    <h3>FEATURED PROJECTS</h3>
                    <ul>
                        <li>
                            <nuxt-link to="projects.html">
                                <img src="@/assets/images/project-image1.jpg" alt="">
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="projects.html">
                                <img src="@/assets/images/project-image2.jpg" alt="">
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="projects.html">
                                <img src="@/assets/images/project-image3.jpg" alt="">
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="projects.html">
                                <img src="@/assets/images/project-image4.jpg" alt="">
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <TextArea v-bind="misson" />
        <Project />
    </div>
</template>

<script>
import TextArea from '@/components/TextArea'
import Project from '@/components/Project'
export default {
    components: {
        TextArea,
        Project
    },
    asyncData(context) {
    // return { project: 'nuxt' }
    },
    data() {
        return {
            project: 'default',
            misson: {
                title: 'OUR MISSION',
                text:
          ' This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.'
            }
        }
    },
    mounted() {
        this.project = '12312312'
    },
    methods: {},
    head() {
    // pages頁面才能使用
        return {
            titleTemplate: ''
        }
    }
}
</script>

<style scoped>
#page {
    overflow: hidden;
    margin: 0;
    padding: 0;
    padding-top: 65px;
    width: auto;
    background: url('@/assets/images/bg-home.jpg') no-repeat scroll center top
        #000000;
    background-size: cover;
    z-index: 3;
}

#body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;

    /* min-height: 808px; */
    background-color: #000000;
}

#body.home {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;

    /* min-height: 1308px; */
    background: none;
}

#body.home .header {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    background: none;
}

#body.home .header div {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 940px;
}

#body.home .header div img.satellite {
    position: absolute;
    top: 41px;
    left: 10px;
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
    z-index: 50;
}

#body.home .header div h1 {
    position: relative;
    display: block;
    float: right;
    margin: 187px 0 27px;
    padding: 0 100px 0 399px;
    width: 100%;
    font-size: 60px;
    font-family: audiowide-regular-webfont, sans-serif;
    font-weight: normal;
    text-align: center;
    text-align: right;
    color: #ffffff;
    z-index: 60;
    line-height: 60px;
    text-transform: uppercase;
}

#body.home .header div h2 {
    position: relative;
    display: block;
    float: right;
    margin: 0 0 36px;
    padding: 0 170px 0 506px;
    width: 100%;
    font-size: 43px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    text-align: right;
    color: #ffffff;
    z-index: 60;
    line-height: 43px;
    text-transform: uppercase;
}

#body.home .header div a.more {
    position: relative;
    display: block;
    float: right;
    margin: 0 200px 0 0;
    padding: 0;
    width: 180px;
    height: 49px;
    font-size: 18px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #a3a3a3;
    background-color: #000000;
    z-index: 55;
    line-height: 49px;
    text-transform: uppercase;
}

#body.home .header div a.more:hover {
    color: #ffffff;
    background-color: #ab000b;
}

#body.home .header div h3 {
    position: relative;
    float: left;
    margin: 96px 0 0;
    *margin: 102px 0 0; /* Needed for IE8 and old versions */
    padding: 17px 0 10px;
    width: 940px;
    min-height: 27px;
    font-size: 23px;
    font-family: audiowide-regular-webfont, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #a3a3a3;
    background: url('@/assets/images/bg-transparent1.png') repeat;
    line-height: 23px;
    text-transform: uppercase;
}

#body.home .header div ul {
    display: flex;
    padding: 0;
    width: 100%;
    list-style: none outside none;
}

#body.home .header div ul li:first-child {
    padding: 0;
}

#body.home .header div ul li {
    /* float: left; */
    margin: 0;
    padding: 0;
    width: auto;
    border: medium none;
}

#body.home .header div ul li a {
    display: block;
    float: none;
    margin: 0;
    padding: 0;
    width: 235px;
    height: 156px;
}

#body.home .header div ul li a img {
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
    opacity: 1;
    filter: alpha(opacity=100); /* Needed for IE8 and old versions */
    cursor: pointer;
}

#body.home .header div ul li a img:hover {
    opacity: 0.7;
    filter: alpha(opacity=70); /* Needed for IE8 and old versions */
}

#body.home .body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 168px;
    background-color: #630031;
}

#body.home .body div {
    overflow: hidden;
    margin: 0 auto;
    padding: 31px 10px 0;
    max-width: 940px;
}

#body.home .body div h1 {
    display: block;
    margin: 0 auto 24px;
    padding: 0;
    width: 780px;
    font-size: 32px;
    font-family: audiowide-regular-webfont, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 32px;
    text-transform: uppercase;
}

#body.home .body div p {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 780px;
    font-size: 18px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 24px;
}

#body.home .body div p a {
    margin: 0 auto;
    padding: 0;
    font-size: 18px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    text-decoration: underline;
    color: #ffffff;
    line-height: 24px;
}

#body.home .body div p a:hover {
    color: #a3a3a3;
}
</style>
