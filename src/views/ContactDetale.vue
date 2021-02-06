<template>
  <div class="contact-detale">
    <div class="container contact-info-wrapper">
      <div class="contact-info">
        <!-- Contact Name and Navigation Panel -->
        <div class="contact-nav">
          <div class="contact-option">
            <div class="contact-icon">
              <span>{{ userInfo.fName.substr(0, 1) }}</span>
              <span>{{ userInfo.sName.substr(0, 1) }}</span>
            </div>
            <h2 class="contact-name">
              {{ userInfo.fName + " " + userInfo.sName }}
            </h2>
            <input class="contact-edit" type="button" value="Edit contact" />
          </div>
        </div>
        <!-- Contact Inpormation Panel -->
        <div class="contact-detile">
          <div class="contact-detile-title">
            <span class="contact-detile-title-name">Contact information</span>
          </div>
          <div class="contact-detile-body">
            <table class="contact-detile-element" v-if="userInfo.contacts">
              <tbody>
                <tr v-for="(userContact, uId) in userInfo.contacts" :key="uId">
                  <td>{{ userContact.contactName }}</td>
                  <td>{{ userContact.contactValue }}</td>
                </tr>
              </tbody>
            </table>
            <div class="contact-detile-empty" v-else>
              <span>Сontact information is empty!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetale",
  data() {
    return {
      userInfo: null
    };
  },
  created() {
    this.userInfo = this.$store.getters.getSelectedUser(
      parseInt(this.$route.params.id)
    );
  }
};
</script>

<style lang="scss" scoped>
.contact-detale {
  z-index: -1;
  .contact-info-wrapper {
    @include sub-container;
    .contact-info {
      display: flex;
      flex-direction: row;
      padding: 0 30px;
      column-gap: 30px;
      justify-content: space-between;

      .contact-nav {
        .contact-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 300px;
          background-color: $clouds;
          border-radius: 10px;
          box-shadow: 0px 0px 5px 2px rgba($concrete, 0.3);

          .contact-icon {
            @include card-icon;
            border-radius: 50%;
            margin: 15px 0 10px 0;
            background-color: $river;
            span {
              font-size: 24px;
            }
          }

          .contact-name {
            margin: 0 0 15px 0;
            text-align: center;
          }

          .contact-edit {
            height: 30px;
            width: auto;
            padding: 0 20px;
            margin-bottom: 15px;
            color: $concrete;
            border: 1px solid $concrete;
            border-radius: 25px;
            outline: none;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
              color: $river;
              border: 1px solid $river;
            }
          }
        }
      }
      .contact-detile {
        flex-grow: 1;

        .contact-detile-title {
          background-color: $river;
          text-align: center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;

          .contact-detile-title-name {
            line-height: 50px;
            font-size: 20px;
            color: $clouds;
          }
        }
        .contact-detile-body {
          background-color: $clouds;
          box-shadow: 0px 0px 5px 2px rgba($concrete, 0.3);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          .contact-detile-element {
            width: 100%;
            border-collapse: collapse;
            tr {
              td {
                border-bottom: 1px solid $silver;
                padding: 0.5rem;

                &:first-child {
                  border-right: 1px solid $silver;
                }
              }

              &:last-child td {
                border-bottom: none;
              }
            }
          }
          .contact-detile-empty {
            text-align: center;
            span {
              line-height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
