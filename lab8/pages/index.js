import "./api/pokemon/id/[id].js";
import "./api/pokemon/name/[name].js";
import NameSearch from "../components/NameSearch/index.js";
import IdSearch from "../components/IdSearch/index.js";

class Home extends React.Component {

  render() {
    return (
      <div>
        <NameSearch />
        <IdSearch />
    </div>
    );
  }
}

export default Home;