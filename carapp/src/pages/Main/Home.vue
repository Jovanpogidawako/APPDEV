<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal class="col-12">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          7:30PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal class="col-12">
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://www.kbb.com/wp-content/uploads/2021/02/2022-kia-carnival-front-3qtr-16x9-2.jpg?w=918"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col"
          src="https://www.gran-turismo.com/gtsport/livery/8791030872890410504_23.jpg"
        />

        <q-card-actions vertical class="justify-around">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://s1.cdn.autoevolution.com/images/news/la-dodgers-outfielder-yasiel-puig-goes-super-custom-on-his-range-better-watch-out-92950_1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section hhorizontal class="col-12">
        <q-img
          class="col-5"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://image.cnbcfm.com/api/v1/image/106109046-1567519408144547317.jpg?v=1567519467&w=720&h=405"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" @click="navigateToSchedulingPage()">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://imgcdn.zigwheels.ph/large/gallery/exterior/27/701/porsche-911-front-angle-low-view-647614.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary" @click="navigateToSchedulingPage()">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal class="col-12">
        <q-img
          class="col-5"
          src="https://images.autofun.ph/file/b4cc558dfcd849b69e6bd7d89c03eb23.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>
<script>

export default {
  methods: {
    navigateToSchedulingPage() {
      // Use Vue Router to navigate to the scheduling page
      this.$router.push('/sched');
    },
  },
};
</script>
