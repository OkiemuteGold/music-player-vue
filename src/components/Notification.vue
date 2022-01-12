 <template>
  <div class="notificazion animated">
    <span>{{notificationMessage}}</span>
  </div>
</template>

<script>
export default {
  name: "Nofication",
  computed: {
    notificationMessage() {
      return this.$store.getters.notificationMessage;
    }
  }
};
</script>

<style>
</style>