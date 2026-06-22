import { useNavigate } from "react-router-dom";
import EnrollForm from "../components/EnrollForm";

const EnrollPage = ({ tracks, onEnroll }) => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    // After a successful enroll, navigate back to home so the new student appears
    navigate("/");
  };

  return (
    <div className="enroll-page">
      <EnrollForm
        tracks={tracks}
        onEnroll={onEnroll}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default EnrollPage;
