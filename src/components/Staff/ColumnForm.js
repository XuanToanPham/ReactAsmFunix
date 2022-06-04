
import Container from "react-bootstrap/esm/Container";

const ColumnForm = (props) => {
  const submitHandler = (event) => {
    props.onClick(event.target.value);
  };
  return (
    <Container>
      <div className="row justify-content-end">
        <form  className="col-3" >
          <label className="form-lable" htmlFor="column-list-staff">
            Chọn số cột hiển thị danh sách
          </label>
          <select className="form-select" id="column-list-staff" onChange={submitHandler}>
            <option >Chọn...</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default ColumnForm;
