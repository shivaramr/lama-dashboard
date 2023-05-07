import Datatable from "../../components/Datatable";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
