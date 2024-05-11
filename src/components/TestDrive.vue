<template>
  <div id="test-drive-grid">
    <article v-for="item in testDriveData" :key="item.id">
      <span class="material-symbols-rounded main-icon">
        swap_driving_apps
      </span>
      <h2>Test Drive</h2>
      <ul>
        <li>
          <p>
            <span class="material-symbols-rounded"> map </span>
            {{ $t(item.location) }}
          </p>
        </li>
        <li>
          <p>
            <span class="material-symbols-rounded"> calendar_month </span>
            {{ $t(item.days) }}
          </p>
        </li>
        <li>
          <p>
            <span class="material-symbols-rounded"> schedule </span>
            {{ item.time }}
          </p>
        </li>
        <li>
          <p>
            <span class="material-symbols-rounded"> signpost </span>
            {{ $t(item.address) }}
          </p>
        </li>
      </ul>
      <small>{{ item.phone }}</small>
      <p style="text-align: center">
        <a :href="'tel:' + item.phoneNumber">{{ $t("testdrive.callnow") }}</a>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testDriveData: [
        {
          id: "1",
          location: "testdrive.chisinau",
          days: "testdrive.daychisinau",
          time: "14:00",
          address: "testdrive.addresschisinau",
          phone: "022 815827, 0788 48 000",
          phoneNumber: "+37378848000",
        },
        {
          id: "2",
          location: "testdrive.varnita",
          days: "testdrive.daysvarnita",
          time: "09:00 - 12:00",
          address: "testdrive.addressvarnita",
          phone: "0788 30 116, 0777 99 783",
          phoneNumber: "+37377799783",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#test-drive-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 90px;
  gap: 1rem;

  @media screen and (max-width: 1653px) {
    margin: 120px 20px 0 20px;
    max-height: 380px;
  }

  @media screen and (max-height: 1620px) {
    margin: 100px 20px 0 20px;
    max-height: 400px;
  }

  @media screen and (max-width: 762px) {
    margin: 250px 20px 0 20px;
    max-height: 850px;
  }

  @media screen and (min-width: 806px) and (max-width: 1653px) {
    grid-template-columns: 1fr 1fr;

    article ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: 10px;
      margin-bottom: 20px;

      li {
        width: 100%;
        margin: 0;
        height: 65px;
      }
    }
  }

  article {
    background-color: #f5f5f5;
    width: 100%;
    padding: 0.75rem;
    border-radius: 10px;

    .main-icon {
      color: var(--boek-green-1);
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      margin: 10px 0;
      border-radius: 10px;
      width: max-content;
      background-color: #e6e6e6;
    }

    h2 {
      text-align: center;
    }

    small {
      text-align: center;
      display: block;
    }

    a {
      display: inline-block;
      margin: 10px 0;
      border-radius: 10px;
      text-decoration: none;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      padding: 10px;
      background-color: var(--boek-green-1);
    }
  }
}
</style>
