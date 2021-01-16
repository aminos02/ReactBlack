import React from "react";
const peoplesData = [
  {
    id: 1,
    name: "Bertie Yates",
    age: "29 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: "32 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: "36 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: "34 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: "29 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];
export default function UseBirthdayReminder() {
  const [peoples, setPeoples] = React.useState(peoplesData);
  var counter = 0;
  return (
    <React.Fragment>
      <div className="card">
        <h3
          style={{
            textAlign: "left",
            fontSize: "25px",
            fontFamily: "-apple-system",
          }}
        >
          {peoples.length} birthdays today
        </h3>
        {peoples.map((elem) => (
          <div key={elem.id} style={{ margin: "auto", height: "110px" }}>
            <img
              src={elem.img}
              alt=""
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                objectFit: "cover",

                backgroundPosition: "top center",
                float: "left",
              }}
            />

            <p style={{ float: "left" }}>
              {elem.name} <br />
              {elem.age}
            </p>
          </div>
        ))}
      </div>
      <button type="button" className="btn" onClick={() => setPeoples([])}>
        Clear All
      </button>
    </React.Fragment>
  );
}
