const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')


const app = {
    currentIndex: 0,
    isPlaying: false,
    // Songs list
    songs: [
    {
      name: "One Second",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/OneSecondUnplugged-VuCatTuong-7062288.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Co gai ngay hom qua",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/CoGaiNgayHomQuaUnplugged-VuCatTuong-7062296.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Goc ban cong",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/GocBanCongUnplugged-VuCatTuong-7062295.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "If",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/IfUnplugged-VuCatTuong-7062292.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Mong cho anh",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/MongChoAnhUnplugged-VuCatTuong-7062293.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Mo",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/MoUnplugged-VuCatTuong-7062290.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Nhung ngay mua co don",
      singer: "Trung Quan idol",
      path: "../assets/Music/NhungNgayMuaCoDon-TrungQuanIdol-7069663.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Tan trong mua",
      singer: "Trung Quan idol",
      path: "../assets/Music/TanTrongMua-TrungQuanIdol-7069664.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "The old you",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/TheOldYouUnplugged-VuCatTuong-7062297.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Trong nha ngay mua",
      singer: "Trung Quan idol",
      path: "../assets/Music/TrongNhaNgayMua-TrungQuanIdolNegav-7069666.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Vai phut truoc",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/VaiPhutTruocUnplugged-VuCatTuong-7062289.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Ve phia mua",
      singer: "Trung Quan idol",
      path: "../assets/Music/VePhiaMua-TrungQuanIdol-7069667.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Vet mua",
      singer: "Vu Cat Tuong",
      path: "../assets/Music/VetMuaUnplugged-VuCatTuong-7062294.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    
    
    ],

    // Render songs to view
    render: function () {
        const htmls =this.songs.map(song => {
            return `
            <div class="song">
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    `
        })
    $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    // Handle events
    handleEvents: function(){
        const cdWidth = cd.offsetWidth

        // Scroll CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            console.log(newCdWidth)

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Rotate CD
        const cdThumbAnimation = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 15000,
            iterations: Infinity 
        } )
        cdThumbAnimation.pause()

        // Play click
        playBtn.onclick = function() {
            if (app.isPlaying){
                app.isPlaying = false
                audio.pause()
                player.classList.remove('playing')
                cdThumbAnimation.pause()
            } else {
                app.isPlaying = true
                audio.play()
                player.classList.add('playing')
                cdThumbAnimation.play()
            }
        }

        // // When song is being played
        // audio.onplay = function() {
        //     app.isPlaying = true
        //     player.classList.add('playing')
        // }

        // // When song is being paused
        // audio.onpause = function() {
        //     app.isPlaying = false
        //     player.classList.remove('playing')
        // }

        // // Whenn song in progress
        // audio.ontimeupdate = function () {
        //     if (audio.duration) {
        //         const progressPercent = Math.floor(audio.currentTime/ audio.duration * 100)
        //         progress.value = progressPercent
        //     }
        // }

        // // Skipping song
        // progress.onchange = function(e) {
        //     const seekTime = e.target.value / 100 * audio.duration
        //     audio.currentTime = seekTime
        // }

         // Handle seek/ skip audio
        progress.ontouchstart = function() {
            audio.ontimeupdate = function(){}
        }

        progress.ontouchend = function(e) {
            const seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
            audio.ontimeupdate = function() {
                if(audio.duration) {
                    const progressPercent = audio.currentTime / audio.duration * 100
                    progress.value = progressPercent
                }
            }
        }
        // Next song
        nextBtn.onclick = function() {
            app.nextSong()
            audio.play()
        }
        // Prev song
        prevBtn.onclick = function() {
            app.prevSong()
            audio.play()
        }
    },
        
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image})`
        audio.src = this.currentSong.path
        console.log(heading, cdThumb, audio)
    },

    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentSong = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex = 0) {
            this.currentSong = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    

    // Start function
    start: function () {
        // Define properties for object
        this.defineProperties()

        // Event listener
        this.handleEvents()

        // Loading current song to UI when start app
        this.loadCurrentSong()

        // Render playlist
        this.render()
    },
  }

app.start()


// Random - 57p50s