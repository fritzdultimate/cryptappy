<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class=""
    >
        <v-text-field
            v-model="email"
            :rules="emailRules"
            outlined
            label="Your email or Wallet ID"
            required
        ></v-text-field>

        <v-card-actions class="pt-0 mx-4">
            <v-btn
                :disabled="!valid"
                depressed
                color="primary"
                block
                class="font-weight-bold"
                v-on:click.prevent="$emit('validate', email)"
            >
                Gain Access
            </v-btn>
        </v-card-actions>
        <v-card-text class="text-center">
            <router-link to="/" class="text-decoration-none font-weight-medium blue--text text-lighten-2 text-subtitle-2">Need some help?</router-link>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="grey--text text--lighten- font-weight-medium text-caption text-center">
            Don't have a Blockchain Account? 
            <router-link to="/" class="text-decoration-none font-weight-medium blue--text text-lighten-2">
                Sign up Now
                <v-icon right color="white" small>mdi-arrow-right</v-icon>
            </router-link>
        </v-card-text>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
        }
    },

    methods: {
        validate(){
            if( this.$refs.form.validate() ) {
                // this.valid = true;
                // this.registering = true;
                // this.registeringNotifMessage = 'Please wait... Registering and setting up your wallet';
                // Call Api
            }
        },
    },

    mounted() {
        this.$emit('ValidateEmail', this.email);
    }
}
</script>