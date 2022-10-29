<template>
    <div>
        <storewidget></storewidget>

        <div class="card">
            <div class="card-header pb-0">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title mg-b-0">STRIPED ROWS</h4>
                    <span>
                        {{ FormShow }}
                        <button
                            v-if="FormShow == true"
                            class="btn btn-success-gradient me-2"
                        >
                            ບັນທຶກ
                        </button>
                        <button
                            v-if="FormShow == true"
                            class="btn btn-danger-gradient"
                            @click="close_form()"
                        >
                            ຍົກເລີກ
                        </button>
                        <button
                            v-if="FormShow == false"
                            class="btn btn-primary-gradient"
                            @click="add_store()"
                        >
                            ເພີ່ມໃຫມ່
                        </button>
                    </span>
                </div>
                <p class="tx-12 tx-gray-500 mb-2">
                    Example of Valex Striped Rows.. <a href="">Learn more</a>
                </p>
            </div>
            <div class="card-body">
                <div class="form-store row">
                    <div class="col-mdd-3">ອັບໂຫລດຮູບ</div>
                   
                </div>
                <!-- <hr /> -->
                <div class="table-responsive" v-if="FormShow">
                    <table class="table table-striped mg-b-0 text-md-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Joan Powell</td>
                                <td>Associate Developer</td>
                                <td>$450,870</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Gavin Gibson</td>
                                <td>Account manager</td>
                                <td>$230,540</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Julian Kerr</td>
                                <td>Senior Javascript Developer</td>
                                <td>$55,300</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Cedric Kelly</td>
                                <td>Accountant</td>
                                <td>$234,100</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Samantha May</td>
                                <td>Junior Technical Author</td>
                                <td>$43,198</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- bd -->
            </div>
            <!-- bd -->
        </div>
        <!-- bd -->
    </div>
</template>

<script>
export default {
    name: "MiniPosHome",

    data() {
        return {
            FormShow: false,
        };
    },
    methods: {
        add_store() {
            this.FormShow = true;
        },
        close_form() {
            this.FormShow = false;
        },
    },
};
</script>

<style lang="scss" scoped></style>
