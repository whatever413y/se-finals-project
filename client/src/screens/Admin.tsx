import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useLocation } from "react-router-dom";
import User from "../components/User"

const Admin: React.FC = () => {
  const location = useLocation()
  const user: User = location.state.user

  return (
    <div></div>
  );
};

export default Admin;