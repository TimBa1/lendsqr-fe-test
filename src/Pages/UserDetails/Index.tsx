import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from "../../Assets/1.svg";
import back from "../../Assets/np_back_3007750_000000 1.svg";
import star from "../../Assets/tier.svg";

function UserDetail() {
  const navigate = useNavigate();
  const details = useLocation().state;

  return (
    <div className="details">
      <div onClick={() => navigate(-1)} className="breadcrumbs">
        <img src={back} alt="arrow" />
        <span>Back to Users</span>
      </div>
      <div className="title">
        <h2>User Details</h2>
        <div className="buttons">
          <button className="buttons red">Blacklist User</button>
          <button className="buttons green">Activate User</button>
        </div>
      </div>
      <div className="heading">
        <div className="user-details">
          <img src={avatar} alt="avatar" />
          <div className="name">
            <div className="fullname">
              {details?.name || "Timilehin Bakare"}
            </div>
            <div className="fn">1223455667</div>
          </div>
          <div className="line"></div>
          <img src={star} alt="avatar" />
          <div className="line"></div>
          <div className="account">
            <div className="amt">200,000</div>
            <div className="number">2008112824/Kuda Bank</div>
          </div>
        </div>
        <div className="heading-list">
          <div className="item active">Personal Details</div>
          <div className="item">Documents</div>
          <div className="item">Bank details</div>
          <div className="item">Loans</div>
          <div className="item">savings</div>
          <div className="item">Apps and System</div>
        </div>
      </div>
      <div className="info-container">

        <div>
          <h3 className="title">Personal Information</h3>
          <div className="flex-container">
            <div className="content">
              <h6 className="top">Full Name</h6>
              <h5 className="bottom">Gakare Timilehin</h5>
            </div>
            <div className="content">
              <h6 className="top">phone Number</h6>
              <h5 className="bottom">0987654321</h5>
            </div>
            <div className="content">
              <h6 className="top">Email</h6>
              <h5 className="bottom">timilehinbakare.tn@gmail</h5>
            </div>
            <div className="content">
              <h6 className="top">BVN</h6>
              <h5 className="bottom">12345667890</h5>
            </div>
            <div className="content">
              <h6 className="top">Gender</h6>
              <h5 className="bottom">Male</h5>
            </div>
            <div className="content">
              <h6 className="top">Marital Status</h6>
              <h5 className="bottom">Single</h5>
            </div>
            <div className="content">
              <h6 className="top">Childern</h6>
              <h5 className="bottom">None</h5>
            </div>
            <div className="content">
              <h6 className="top">Type of Residence</h6>
              <h5 className="bottom">Parent Apartment</h5>
            </div>
          </div>
        </div>
        <div className="line"></div>

        <div>
          <h3 className="title">Education and Employment</h3>
          <div className="flex-container">
            <div className="content">
              <h6 className="top">Level of Education</h6>
              <h5 className="bottom">B.Sc</h5>
            </div>
            <div className="content">
              <h6 className="top">Employment Status</h6>
              <h5 className="bottom">Employed</h5>
            </div>
            <div className="content">
              <h6 className="top">Sector of Employment</h6>
              <h5 className="bottom">Fintech</h5>
            </div>
            <div className="content">
              <h6 className="top">Duration of Employment</h6>
              <h5 className="bottom">2 Years</h5>
            </div>
            <div className="content">
              <h6 className="top">Office Email</h6>
              <h5 className="bottom">grace@lendersqr.com</h5>
            </div>
            <div className="content">
              <h6 className="top">Montly Income</h6>
              <h5 className="bottom">₦200,000.00- ₦400,000.00</h5>
            </div>
            <div className="content">
              <h6 className="top">Loan Repayment</h6>
              <h5 className="bottom">₦20,000.00</h5>
            </div>
          </div>
        </div>
        <div className="line"></div> 

        <div>
          <h3 className="title">Socials</h3>
          <div className="flex-container">
            <div className="content">
              <h6 className="top">Twitter</h6>
              <h5 className="bottom">iam_timba</h5>
            </div>
            <div className="content">
              <h6 className="top">Facebook</h6>
              <h5 className="bottom">Timilehin Bakare</h5>
            </div>
            <div className="content">
              <h6 className="top">Instagram</h6>
              <h5 className="bottom">@iam_timba</h5>
            </div>
          </div>
        </div>
        <div className="line"></div> 


        <div>
          <h3 className="title">Guarantor</h3>
          <div className="flex-container">
            <div className="content">
              <h6 className="top">Full Name</h6>
              <h5 className="bottom">Bakare Adesina</h5>
            </div>
            <div className="content">
              <h6 className="top">Phone Number</h6>
              <h5 className="bottom">08033332957</h5>
            </div>
            <div className="content">
              <h6 className="top">Email</h6>
              <h5 className="bottom">desinaly@gmail.com</h5>
            </div>
            <div className="content">
              <h6 className="top">Relation</h6>
              <h5 className="bottom">Father</h5>
            </div>
          </div>
        </div>
        <div className="line"></div> 

        <div>
          <h3 className="title"></h3>
          <div className="flex-container">
            <div className="content">
              <h6 className="top">Full Name</h6>
              <h5 className="bottom">Bakare Abimbola</h5>
            </div>
            <div className="content">
              <h6 className="top">Phone Number</h6>
              <h5 className="bottom">08126414677</h5>
            </div>
            <div className="content">
              <h6 className="top">Email</h6>
              <h5 className="bottom">demolara@yahoo.com</h5>
            </div>
            <div className="content">
              <h6 className="top">Relation</h6>
              <h5 className="bottom">Sister</h5>
            </div>
          </div>
        </div>
        <div className=""></div> 
        
      </div>
    </div> 
  );
}

export default UserDetail;



