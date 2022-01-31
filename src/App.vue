<template>
	<v-app>
		<v-app-bar app color="primary" dark v-if="!hideAppBar">
			<div class="d-flex align-center">
				<v-icon>FlowBank</v-icon>
			</div>

			<v-spacer></v-spacer>

			<router-link to="/signup">
				<v-btn text>
					<span class="mr-2">Sign Up</span>
					<v-icon>mdi-open-in-new</v-icon>
				</v-btn>
			</router-link>
		</v-app-bar>
		<router-view></router-view>
	</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
	hideAppBar: false
  }),

  computed : {
		
  },

	watch: { 
		$route (to){
			let current_path = to.path;
			this.toggleAppBar(current_path)
		}
	},

	methods: {
		toggleAppBar(path) {
			let routes = ['/signup'];
			this.hideAppBar = routes.includes(path);
		}
	},

  created() {
	this.toggleAppBar(this.$router.currentRoute.path);
  }
};
</script>
