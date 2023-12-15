<template>
 <div class="fit row wrap justify-center items-start content-start">
          <q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://imgcdn.zigwheels.ph/large/gallery/exterior/27/701/porsche-911-front-angle-low-view-647614.jpg" style="width: 300px; height: 200px;"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Porsche (991)
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>

          <q-card @click="$router.push('/det2')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg " style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Lamborghini orange(2019 model)
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          <q-card @click="$router.push('/det3')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/09/2018-chevrolet-camaro-zl1.jpg?crop=0.673xw:0.552xh;0.143xw,0.287xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Chevrolet Camaro ZL1
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card><q-card @click="$router.push('/det4')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/my22-hypersonic-1619122058.jpg?crop=0.553xw:0.369xh;0.243xw,0.417xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Chevrolet Corvette
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          ><q-card @click="$router.push('/det5')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/2021-ford-mustang-mach-1-106-1592231878.jpg?crop=0.735xw:0.551xh;0.190xw,0.130xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Ford Mustang
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          ><q-card @click="$router.push('/det6')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/2022-mazda-mx-5-miata-03-3-1639671247.jpg?crop=0.466xw:0.349xh;0.311xw,0.564xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Mazda MX-5 Miata
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          ><q-card @click="$router.push('/det7')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/mclarenarturaflux-2-1613486108.jpg?crop=0.677xw:0.508xh;0.0357xw,0.163xh&resize=980:* " style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  McLaren Artura
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          ><q-card @click="$router.push('/det8')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/2022-porsche-718-boxster-gts-4l-pdk-384-1666792893.jpg?crop=0.648xw:0.485xh;0.128xw,0.477xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Porsche 718 Boxster
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>
          ><q-card @click="$router.push('/det9')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="https://hips.hearstapps.com/hmg-prod/images/2022-porsche-718-cayman-4l-147-1648783304.jpg?crop=0.507xw:0.380xh;0.141xw,0.513xh&resize=980:*" style="width: 300px; height: 200px"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Porsche 718 Cayman
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="17px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Special Price</div>
                <span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through">₹3,699</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="primary">
                View details
              </q-btn>
            </q-card-actions>
          </q-card>

        </div>

</template>

<script>
  export default {
    name: "category.vue",

  }
</script>

<style scoped>
  .my-card {
    width: 100%;
    max-width: 300px;
  }
</style>
