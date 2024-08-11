/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";
import UserNum from "../AdminComponents/UserNum";
import TranscationNum from "../AdminComponents/TranscationNum";
import { medium, large } from "../responsive";

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  ${large({ margin: "2rem 1rem" })}
`;

const MapContainer = styled.div`
  width: 100%;
  height: 40vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

const BottomCards = styled.div`
  display: flex;
  gap: 1rem;
  ${medium({ flexDirection: "column" })}
`;
const UserCard = styled.div`
  flex: 1;
`;

const TransactionCard = styled.div`
  flex: 2;
`;

export const AdminHome = () => {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector((state) => state.user);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    setUserStats([]);
    const getStats = async () => {
      try {
        const res = await axios.get(
          `https://ecommercebackend-o0yl.onrender.com/users/stats`,
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        console.log(res.data);
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);
  let label = [];
  let value = [];
  userStats.forEach((item) => {
    label.push(item.name);
    value.push(item["Active User"]);
  });

  const data = {
    labels: label.reverse(),
    datasets: [
      {
        label: "# of users",
        data: value,
        fill: false,
        backgroundColor: "rgb(218, 65, 210)",
        borderColor: "rgba(68, 6, 73, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Maincontainer>
      <AdminNav />
      <Container>
        <MapContainer>
          <div>
            {" "}
            <h4>User Analytics</h4>
          </div>
          <div>
            {" "}
            <Line data={data} options={options} />
          </div>
        </MapContainer>
        <BottomCards>
          <UserCard>
            <UserNum />
          </UserCard>
          <TransactionCard>
            <TranscationNum />
          </TransactionCard>
        </BottomCards>
      </Container>
      <Footer />
    </Maincontainer>
  );
};
