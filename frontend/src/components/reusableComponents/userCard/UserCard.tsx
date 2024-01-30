import styles from './userCard.module.css';

// берем даннные из store

const UserCard = ({avatarUrl, firstName, lastName, userTag, position}:any) => {
  
  
  // const { avatarUrl, firstName, lastName, userTag, position } = user;

  // console.log('usersData from all -', usersData);

  return (
    <div className={styles.root}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={avatarUrl} alt="path to img" />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.fullName}>
              <p className={styles.fullNameAll}>{firstName} {lastName} <span className={styles.userTag}>{userTag}</span></p>
              {/* <p className={styles.userTag}>{userTag}</p> */}
            </div>
            <p className={styles.position}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserCard;