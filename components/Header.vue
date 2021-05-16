<template>
    <div id="header">
        <div>
            <nuxt-link class="logo" to="/">
                <img src="@/assets/images/logo.png" alt="">
            </nuxt-link>

            <ul id="navigation">
                <li class="selected">
                    <nuxt-link to="/" exact class="navBar">
                        Home
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link exact to="/about" class="navBar">
                        About
                    </nuxt-link>
                </li>
                <li class="menu">
                    <nuxt-link to="/projects" class="navBar">
                        Projects
                    </nuxt-link>
                    <ul class="primary">
                        <li>
                            <nuxt-link exact to="/projects/project1" class="navBar">
                                proj 1
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="menu">
                    <nuxt-link to="/blog" class="navBar">
                        Blog
                    </nuxt-link>
                    <ul class="secondary">
                        <li>
                            <nuxt-link exact to="singlepost" class="navBar">
                                Single post
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/contact" exact class="navBar">
                        Contact
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
#header {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 65px;
    background-image: url('@/assets/images/bg-transparent1.png');
}

#header div {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 940px;
    min-height: 65px;
}

#header div a.logo {
    display: block;
    float: left;
    margin: 0 44px 0 0;
    padding: 0;
    width: 304px;
    height: 65px;
}

#header div a img {
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
}

#header div ul {
    display: inline-block;
    float: left;
    margin: 0;
    padding: 0;
    width: auto;
    list-style: none;
}

#header div ul li {
    float: left;
    margin: 0;
    padding: 0;
    width: auto;
}

#header div ul li a {
    display: block;
    margin: 0;
    padding: 0 24px;
    *padding: 0 23px; /* Needed for IE8 and old versions */
    width: auto;
    min-height: 60px;
    font-size: 18px;

    /* font-family: Arial; */
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 65px;
    text-transform: uppercase;
}

#header div ul li a:hover {
    color: #ffffff;
    background-color: #620031;
}

/* #header div ul li.selected a {
    color: #a3a3a3;
    background-color: #000000;
} */

.navBar.nuxt-link-active {
    color: #a3a3a3;
    background-color: #000000;
}

.navBar.nuxt-link-exact-active {
    color: #a3a3a3;
    background-color: #000000;
}

#header div ul li.menu {
    position: relative;
}

#header div ul li.menu ul {
    position: absolute;
    top: 60px;
    left: -99999px;
    display: block;
    margin: 0;
    padding: 0;
    width: 142px;
    list-style: none;
    z-index: 50;
}

#header div ul li.menu:hover ul.primary {
    left: 31px;
}

#header div ul li.menu ul.primary.selected {
    left: 31px;
}

#header div ul li.menu:hover ul.secondary {
    left: -20px;
}

#header div ul li.menu ul.secondary.selected {
    left: -20px;
}

#header div ul li.menu ul li {
    margin: 0;
    padding: 0;
    width: auto;
}

#header div ul li.menu ul li a {
    display: block;
    margin: 0;
    padding: 0 10px;
    width: auto;
    min-height: 60px;
    font-size: 18px;

    /* font-family: Arial; */
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    background-color: #620031;
    line-height: 60px;
    text-transform: uppercase;
}

#header div ul li.menu ul.primary.selected li a,
#header div ul li.menu ul.secondary.selected li a {
    color: #a3a3a3;
    background-color: #000000;
}
</style>
