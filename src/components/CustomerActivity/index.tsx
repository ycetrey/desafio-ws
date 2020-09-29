import React, { useEffect, useState } from "react";

import {
  Container,
  Title,
  Search,
  Icon,
  ActivityFilter,
  Total,
  Delayed,
  InProgress,
  TODO,
  Done,
  ActivityList,
  DelayedActivityList,
  TODOActivityList,
  DoneActivityList,
  InProgressActivityList,
  Item,
  ItemData,
} from "./styles";

import { FaUsers, FaPhoneAlt } from "react-icons/fa";

interface ActivityItemProps {
  icon?: React.ReactNode;
  title?: string;
  contact?: string;
  date?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  title,
  contact,
  date,
}) => {
  return (
    <Item>
      {icon && icon}
      <ItemData>
        <span className="title">{title}</span>
        {contact && <span className="contact">{contact}</span>}
        {date && <span className="date">{date}</span>}
      </ItemData>
    </Item>
  );
};

const CustomerActivity: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const [delayed, setDelayed] = useState(0);
  const [todo, setTodo] = useState(0);
  const [inprogress, setInprogress] = useState(0);
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);

  const FilterActivity = (e: any) => {
    let selected = document.querySelectorAll(".filter > .selected");
    for (var i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }

    const current_filter = e.currentTarget.className.split(" ")[2];
    const class_name = e.currentTarget.className;

    e.currentTarget.className = `${class_name} selected`;

    return setFilter(current_filter);
  };

  useEffect(() => {
    const countDelayed =
      document.querySelectorAll(".delayedList > div").length || 0;
    setDelayed(countDelayed);

    const countTodo = document.querySelectorAll(".todoList > div").length || 0;
    setTodo(countTodo);

    const countInprogress =
      document.querySelectorAll(".inprogressList > div").length || 0;
    setInprogress(countInprogress);

    const countDone = document.querySelectorAll(".doneList > div").length || 0;
    setDone(countDone);
  }, []);

  useEffect(() => {
    const countTotal = delayed + todo + inprogress + done;
    setTotal(countTotal);
  }, [delayed, todo, inprogress, done]);

  return (
    <>
      <Container className="box-shadow">
        <Title>Atividades</Title>
        <Search>
          <Icon />
          <input type="text" name="activity" placeholder="Pesquisar..." />
        </Search>

        <ActivityFilter className="filter">
          <Total className="all selected" onClick={(e) => FilterActivity(e)}>
            <span className="button">{total}</span>
            <span>Total</span>
          </Total>
          <Delayed className="delayed" onClick={(e) => FilterActivity(e)}>
            <span className="button">{delayed}</span>
            <span>Em atraso</span>
          </Delayed>
          <InProgress className="inprogress" onClick={(e) => FilterActivity(e)}>
            <span className="button">{inprogress}</span>
            <span>Em andamento</span>
          </InProgress>
          <TODO className="todo" onClick={(e) => FilterActivity(e)}>
            <span className="button">{todo}</span>
            <span>Previstas</span>
          </TODO>
          <Done className="done" onClick={(e) => FilterActivity(e)}>
            <span className="button">{done}</span>
            <span>Concluídas</span>
          </Done>
        </ActivityFilter>
        <ActivityList id="list">
          {(filter === "delayed" || filter === "all") && (
            <DelayedActivityList className="delayedList">
              <Title>Atividades em atraso</Title>
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
            </DelayedActivityList>
          )}
          {(filter === "todo" || filter === "all") && (
            <TODOActivityList className="todoList">
              <Title>Atividades previstas</Title>
              <ActivityItem
                icon={<FaUsers />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
            </TODOActivityList>
          )}
          {(filter === "inprogress" || filter === "all") && (
            <InProgressActivityList className="inprogressList">
              <Title>Atividades em andamento</Title>
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
            </InProgressActivityList>
          )}
          {(filter === "done" || filter === "all") && (
            <DoneActivityList className="doneList">
              <Title>Atividades concluídas</Title>
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
              <ActivityItem
                icon={<FaPhoneAlt />}
                title="Ligação de agendamento"
                contact="Erica Collins"
                date="Em atraso por 04 dias"
              />
            </DoneActivityList>
          )}
        </ActivityList>
      </Container>
    </>
  );
};

export default CustomerActivity;
