import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import classes from "./NotifyDelete.module.css";
import { notifyAction } from "../../../redux/reducer/notifyReduces";
import { loadingAction } from "../../../redux/reducer/notifyReduces";
const NotifyDelete = () => {
  const nameStaffDelete = useSelector((state) => state.notify.nameStaffDelete);
  const idStaffDelete = useSelector((state) => state.notify.idStaffDelete);
  let finishDelete = false;
  const dispatch = useDispatch()
  const deleteStaff = async () => {
    
    const response = await axios
      .delete(`https://rjs101xbackend.herokuapp.com/staffs/${idStaffDelete}`)
      .catch((err) => console.log(err));
   
    finishDelete = true 
    dispatch(notifyAction.hideNotiFyDelete())
    dispatch(notifyAction.deleteHandler(true))
    history.push("/staffList")
  };
  const deleteHandler = () => {
    deleteStaff()

  };
  const cancelHandler = () =>{
    dispatch(notifyAction.hideNotiFyDelete())
  }
  const history = useHistory();
  return (
    <Modal>
      <Container>
        <h3 className={`pb-3 ${classes.header}`}>Thông báo xóa nhân viên</h3>
        <p className="pt-2">
          Bạn có muốn xóa {nameStaffDelete} ra khỏi danh sách ?{" "}
        </p>
        <div className="row">
          <div className="col-6"></div>
          <div className={`col-6 ${classes.button}`}>
            <button className={`btn`} onClick = {cancelHandler}>Hủy</button>
            <button className={`btn btn-primary`} onClick={deleteHandler}>
              {" "}
              Chấp nhận
            </button>
          </div>
        </div>
      </Container>
      {finishDelete && <Redirect to={`/staffList`}/>}
    </Modal>
  );
};

export default NotifyDelete;
