<template>
  <div class="contact-detale">
    <div class="container contact-info-wrapper">
      <div class="contact-info">
        <!-- Contact Name and Navigation Panel -->
        <div class="contact-nav">
          <div class="contact-option">
            <div
              class="contact-icon"
              :style="{ backgroundColor: '#' + userInfo.color }"
            >
              <span>{{ userInfo.fName.substr(0, 1) }}</span>
              <span>{{ userInfo.sName.substr(0, 1) }}</span>
            </div>
            <h2 class="contact-name">
              {{ userInfo.fName + " " + userInfo.sName }}
            </h2>
            <transition name="fade" mode="out-in">
              <input
                v-if="!editStatus"
                class="contact-edit btn-hover-blue"
                type="button"
                value="Edit contact"
                @click="showEditingContact"
              />
              <div v-if="editStatus" class="contact-option-buttons">
                <input
                  class="contact-edit btn-hover-green"
                  type="button"
                  value="Save"
                  @click="hideEditingContact(), saveData()"
                />
                <input
                  class="contact-edit btn-hover-red"
                  type="button"
                  value="Cancel"
                  @click="hideEditingContact(), cancelEditContact()"
                />
              </div>
            </transition>
          </div>
        </div>

        <!-- Contact Inpormation Panel -->
        <div class="contact-detile">
          <div class="contact-detile-title">
            <span class="contact-detile-title-name">Contact information</span>
          </div>
          <div class="contact-detile-body">
            <table
              class="contact-detile-element"
              v-if="userInfo.contacts.length !== 0"
            >
              <!-- Table with contact information -->
              <tbody>
                <tr v-for="(userContact, uId) in userInfo.contacts" :key="uId">
                  <td>{{ userContact.contactName }}</td>
                  <td>{{ userContact.contactValue }}</td>
                  <!-- Button for editing this or that information -->
                  <transition name="blop">
                    <td
                      v-if="editStatus"
                      class="contact-detile-element-option icon-edit"
                      @click="
                        showEditInfo();
                        selectInformation(uId);
                      "
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </td>
                  </transition>
                  <!-- Button for deleting this or that information -->
                  <transition name="blop">
                    <td
                      class="contact-detile-element-option icon-delete"
                      v-if="editStatus"
                      @click="deleteData(uId)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </transition>
                </tr>
              </tbody>
            </table>
            <!-- If the contact information is empty, display the following information -->
            <div class="contact-detile-empty" v-else>
              <span>Сontact information is empty!</span>
            </div>
          </div>
          <!-- Button for adding new information -->
          <transition name="blop">
            <div class="add-new-row" v-if="!editStatus" @click="showAddNewInfo">
              <i class="fas fa-plus"></i>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- Pop-up to add a new contact information -->
    <AddNewInfo
      :cId="userInfo.id"
      @showAddNewInfo="showAddNewInfo"
      v-if="addNewInfoStatus"
    />
    <!-- Pop-up to edit contact information -->
    <EditInfo
      :cId="userInfo.id"
      :selectedInfoId="selectedInformation"
      @showEditInfo="showEditInfo"
      @editDataInfo="editData"
      v-if="editInfoStatus"
    />
  </div>
</template>

<script>
import AddNewInfo from "../components/AddNewInfo.vue";
import EditInfo from "../components/EditInfo.vue";
export default {
  components: { AddNewInfo, EditInfo },
  name: "ContactDetale",
  data() {
    return {
      userInfo: null,
      userInfoBackup: null,
      editStatus: false,
      addNewInfoStatus: false,
      editInfoStatus: false
    };
  },
  methods: {
    // Pop-up function to edit the selected information. And creating a backup
    showEditingContact() {
      this.userInfoBackup = JSON.parse(JSON.stringify(this.userInfo.contacts));
      this.editStatus = true;
    },
    // Function exit editing
    hideEditingContact() {
      this.editStatus = false;
    },
    // If there have been changes in the contact but they do not need to be recorded
    cancelEditContact() {
      if (this.userInfo.contacts !== this.userInfoBackup) {
        this.userInfo.contacts = this.userInfoBackup;
      }
    },
    // Function that shows a panel for adding contact information
    showAddNewInfo() {
      this.addNewInfoStatus = !this.addNewInfoStatus;
    },
    // Function that shows the contact information editing panel
    showEditInfo() {
      this.editInfoStatus = !this.editInfoStatus;
    },
    // Function that takes the id of the selected information for its further action
    selectInformation(id) {
      this.selectedInformation = id;
    },
    // Function that deletes the selected contact information
    deleteData(id) {
      this.userInfo.contacts.splice(id, 1);
    },
    // Function that edits contact information
    editData(data) {
      this.userInfo.contacts[data.selectedInfoId] = data.editData;
    },
    // Call function (SAVE_NEW_DATA) from VueX
    saveData() {
      this.$store.dispatch("SAVE_NEW_DATA", {
        uId: this.userInfo.id,
        contacts: this.userInfo.contacts
      });
    }
  },
  // When creating a page, a request is made to Vue and the data of the selected user is pulled up
  created() {
    this.userInfo = this.$store.getters.getSelectedUser(
      parseInt(this.$route.params.id)
    );
  }
};
</script>
/* ~~~~~~~~~~ Style ~~~~~~~~~~ */
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

      /* ~~~~~~ Contact Name and Navigation Panel ~~~~~~ */
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
            @include btn-style;
            margin-bottom: 15px;
          }
          .contact-option-buttons {
            display: flex;
            column-gap: 30px;
          }
        }
      }
      /* ~~~~~~ Contact Inpormation Panel ~~~~~~ */
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
                border: 1px solid $silver;

                &:first-child {
                  border-left: none;
                }
                &:last-child {
                  border-right: none;
                }
              }
              .contact-detile-element-option {
                width: 18px;
                cursor: pointer;
              }
              .icon-edit {
                color: $concrete;
                transition: 0.3s;
                &:hover {
                  color: $sun;
                }
              }
              .icon-delete {
                color: $concrete;
                transition: 0.3s;
                &:hover {
                  color: $alizarin;
                }
              }

              &:first-child td {
                border-top: none;
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
        .add-new-row {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          font-size: 20px;
          color: $clouds;
          background-color: $river;
          margin: 20px auto 0 auto;
          border-radius: 25px;
          box-shadow: 0px 0px 5px 2px rgba($concrete, 0.3);
          cursor: pointer;
        }
      }
    }
  }
}

/* ~~~~~~ Respo ~~~~~~ */
@media (max-width: 992px) {
  .contact-detale {
    .contact-info-wrapper {
      .contact-info {
        flex-direction: column;
        row-gap: 30px;

        .contact-nav {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
