<template>
  <v-app>
  <!--  Is always placed at the top of an application with a lower priority than v-system-bar -->
  <v-app-bar app hide-on-scroll>
    <NavbarProfile/>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <Theme/>
    </v-container>
    <!-- we need to put the Animation after the other components for the background to be beneath -->
    <Animation/>
  </v-content>

</v-app>
</template>

<script>
import Theme from '../components/Theme';
import NavbarProfile from '../components/NavbarProfile';
import Animation from '../components/Animation.vue';

export default {
  name: 'App',
  components: {
    Theme,
    NavbarProfile,
    Animation,
  },
  mounted () {
      this.$store.dispatch('getUserDetails')
  },
};
</script>
