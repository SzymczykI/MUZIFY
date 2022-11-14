<template>
  <!-- Introduction -->
  <section class="mb-4 py-40 md:py-64 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-left sm:bg-center bg-local"
      style="background-image: url(assets/img/muzify.gif)"
    ></div>
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import { songsCollection } from "@/plugins/firebase";
import { query, getDocs } from "@firebase/firestore";
import AppSongItem from "@/components/SongItem.vue";

export default {
  name: "Home",
  components: {
    AppSongItem,
  },
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    this.getSongs();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow =
        Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfWindow) {
        console.log("Bottom of window");
      }
    },
    async getSongs() {
      const q = query(songsCollection);
      const snapshots = await getDocs(q);

      snapshots.forEach((doc) => {
        this.songs.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
    },
  },
};
</script>
