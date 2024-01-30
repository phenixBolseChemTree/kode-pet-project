import { useSelector } from 'react-redux';
import { RootState } from '../../../slices/stateStore';
import UserCard from '../../reusableComponents/userCard/UserCard';
import styles from './all.module.css';


// const obj: any = {
//   avatarUrl: "https://api.lorem.space/image/face?w=120&h=120",
//   birthday: "1973-01-24",
//   department: "android",
//   firstName: "John",
//   id: "497f6eca-6276-4993-bfeb-53qweca",
//   lastName: "Doe",
//   phone: "+79001234567",
//   position: "developer",
//   userTag: "jd"
// }

// interface 

const All = () => {
  const usersData = useSelector((state: RootState) => state.users.users);

  console.log('usersData from all -', usersData);

  return (
    <div className="root">
      <div className={styles.feedContainer} >
        <div className={styles.feed}>
          {usersData.map((user) =>
            <UserCard key={user.id}
              avatarUrl={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              userTag={user.userTag}
              position={user.position}
            />
          )}
          {/* <UserCard /> */}
        </div>
      </div>
    </div>
  )
}

export default All;