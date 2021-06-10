<script lang="tsx">
import { defineComponent } from "vue";
import Login from "./components/Login";

export default defineComponent({
  name: "App",
  setup(props) {
    return () => {
      const HeHe = () => {
        return <h2>heh1</h2>;
      };
      return (
        <AConfigProvider>
          <Login />
        </AConfigProvider>
      );
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
