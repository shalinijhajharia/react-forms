import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actioncreators from "../../redux/actioncreators.jsx";
import Display from "../display.jsx";

const Beneficiary = () => {
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [bankcountry, setbankcountry] = React.useState("");
  const [bankdetails, setbankdetails] = React.useState("");
  const [routingnumber, setroutingnumber] = React.useState("");
  const [accountno, setaccountno] = React.useState("");
  const [accounttype, setaccounttype] = React.useState("");
  const [city, setcity] = React.useState("city");
  const [postcode, setposcode] = React.useState("400001");
  const [address, setaddress] = React.useState("address");
  const [completed, setcompleted] = React.useState(false);

  const usertype = useSelector((state) => state.toggleusertype);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actioncreators, dispatch);

  const handlesubmit = (e) => {
    e.preventDefault();
    const form1 = {
      firstname: firstname,
      lastname: lastname,
      fullname: firstname + " " + lastname,
      email: email,
      phone: phone,
      usertype: usertype,
      bankcountry: bankcountry,
      bankdetails: bankdetails,
      routingnumber: routingnumber,
      accountno: accountno,
      accounttype: accounttype,
      postcode: postcode,
      address: address,
      city: city,
      country: country,
    };
    console.log(form1);
    actions.adddetails(form1);
    setcompleted(true);
  };
  return (
    <React.Fragment>
      <form name="beneficiary-personal" onSubmit={handlesubmit}>
        <input
          type="text"
          name="firstname"
          pattern="[A-z]+"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          required
          autoFocus
          autoCapitalize="on"
        />
        <br />
        <br />
        <br />

        <input
          type="text"
          name="lastname"
          pattern="[A-z]+"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          required
          autoCapitalize="words"
        />
        <br />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <input
          type="tel"
          name="phone"
          max={9999999999}
          minLength={10}
          min={9000000000}
          maxLength={10}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <select
          name="country"
          onChange={(e) => setbankcountry(e.target.value)}
          required
        >
          <option value="India">India</option>
          <option value="US">US</option>
        </select>
        <br />
        <br />
        <br />
        <label htmlFor="">Bank Details Format</label>
        <br />
        <br />
        <input
          type="radio"
          className="radio"
          value="local"
          checked={bankdetails === "local"}
          id="local"
          onChange={(e) => setbankdetails(e.target.value)}
        />
        <label htmlFor="local" className="radio">
          Local Bank Details
        </label>
        <input
          type="radio"
          value="swift"
          checked={bankdetails === "swift"}
          id="swift"
          onChange={(e) => setbankdetails(e.target.value)}
        />
        <label htmlFor="swift">SWIFT Details</label>
        <br />
        <br />
        <br />

        <input
          type="number"
          name="rountingnumber"
          placeholder="ACH Rounting number"
          value={routingnumber}
          onChange={(e) => setroutingnumber(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <input
          type="number"
          name="accountnumber"
          placeholder="AccountNumber"
          value={accountno}
          onChange={(e) => setaccountno(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <select
          name="country"
          onChange={(e) => setaccounttype(e.target.value)}
          required
        >
          <option value="fixed">Fixed</option>
          <option value="saving">Saving</option>
          <option value="checking">checking</option>
        </select>
        <br />
        <br />
        <br />
        <select
          name="country"
          onChange={(e) => setcountry(e.target.value)}
          required
        >
          <option>Select Country...</option>
          <option value="India">India</option>
          <option value="US">US</option>
        </select>
        <br />
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <input
          type="number"
          name="postcode"
          minLength={6}
          maxLength={6}
          placeholder="postcode"
          value={postcode}
          onChange={(e) => setposcode(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
      {completed ? <Display /> : null}
    </React.Fragment>
  );
};

export default Beneficiary;