import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import classes from "./NotifyDelete.module.css"
const NotifyDelete = () => {
  const nameStaffDelete =  useSelector((state) => state.notify.nameStaffDelete);
  return (
    <Modal>
      <Container>
        <h3 className={`pb-3 ${classes.header}`}>Thông báo xóa nhân viên</h3>
        <p className="pt-2">Bạn có muốn xóa {nameStaffDelete} ra khỏi danh sách ? </p>
        <div className="row">
          <div className="col-6">

          </div>
          <div className={`col-6 ${classes.button}`}>
            <button className={`btn`}>Hủy</button>
            <button className={`btn btn-primary`}> Chấp nhận</button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default NotifyDelete;
