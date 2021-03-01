<template>
    <div>
        <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
        <VideoDetail :video="selectedVideo" />
        <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
        </div>
        
        
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


const API_KEY= 'AIzaSyABvAwz-b6RC5kDKMhi0jDfLZz2JiW8AwQ';
import axios from 'axios';


export default {
   name: 'App',
   components:{
       SearchBar,
       VideoList,
       VideoDetail
   },
   data(){
       return{
           videos:[],
           selectedVideo:null
       };
   },
   methods:{
       onVideoSelect(video){
        this.selectedVideo = video;
       },
       onTermChange(searchTerm){
           axios.get('https://www.googleapis.com/youtube/v3/search',{
               params:{
                   key:API_KEY,
                   type: 'video',
                   part:'snippet',
                   //part-> what type of information that we want to get
                   q:searchTerm
               }
           }).then(response=> {
               this.videos=response.data.items;
           }); 
       } 
   }
};
</script>