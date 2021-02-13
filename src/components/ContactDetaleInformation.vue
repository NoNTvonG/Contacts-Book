<template>
  <div class="contact-detile">
    <div class="contact-detile-title">
      <span class="contact-detile-title-name">Contact information</span>
    </div>
    <div class="contact-detile-body">
      <table class="contact-detile-element" v-if="userInfo.length !== 0">
        <tbody>
          <tr v-for="(userContact, uId) in userInfo" :key="uId">
            <td>{{ userContact.contactName }}</td>
            <td>{{ userContact.contactValue }}</td>
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
            <td
              class="contact-detile-element-option icon-delete"
              v-if="editStatus"
              @click="deleteOneContactInfo(uId)"
            >
              <i class="fas fa-trash-alt"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="contact-detile-empty" v-else>
        <span>Сontact information is empty!</span>
      </div>
    </div>
    <div class="add-new-row" v-if="!editStatus" @click="showAddNewInfo">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"]
};
</script>

<style lang="scss" scoped>
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
</style>
