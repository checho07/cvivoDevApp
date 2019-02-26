import { HomeScreenGroupItem } from './../../data/HomeScreenGroupItem';
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { UserService } from "../../services/UserService";
import { AuthService } from "../../services/AuthService";
import { Movie } from "../../data/Movie";
import { TvShow } from "../../data/TvShow";
import { MyListItem } from "../../data/MyListItem";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-mylist",
  templateUrl: "mylist.html"
})
export class MylistPage {
  userId: string = "";
  myListItems: HomeScreenGroupItem[] = [];
  loaded = false;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.authService.afAuth.user.subscribe(user => {
      this.userId = user.uid;
    });
  }


  ionViewDidEnter() {
    console.log("ionViewDidEnter MylistPage");

    this.getMoviesAndShowsFromMyList();
  }

  goHome(){
    this.navCtrl.setRoot(TabsPage)
  }

  getMoviesAndShowsFromMyList() {
    this.myListItems = [];
    this.loaded = false;

    // Get movies from my list first
    this.userService.getFavoriteMovies(this.userId).then((result: any) => {
      result.favoriteMovies.forEach((movie: Movie) => {
        var myListItem = new HomeScreenGroupItem();

        myListItem.movieId = movie.movieId;
        myListItem.detailsPicture = movie.detailsPicture;
        myListItem.description = movie.description;
        myListItem.name = movie.name;
        myListItem.picture = movie.picture;


        this.myListItems.push(myListItem);
      });
      this.loaded = true;
      // Then get tv shows from my list
      // this.userService.getFavoriteTvShows(this.userId).then((result: any) => {
      //   result.favoriteTvShows.forEach((tvShow: TvShow) => {
      //     var myListItem = new MyListItem();

      //     myListItem.itemId = tvShow.tvShowId;
      //     myListItem.picture = tvShow.picture;
      //     myListItem.isMovie = false;

      //     this.myListItems.push(myListItem);
      //   });

      //   this.loaded = true;
      // });
    });
  }

  goToMyListItem(myListItem: HomeScreenGroupItem) {
    
      this.navCtrl.push("MovieDetailsPage", { movieId: myListItem });
   
  }
}
