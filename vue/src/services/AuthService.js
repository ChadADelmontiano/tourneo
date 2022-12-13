import axios from 'axios';

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  },

  getProfile(userId) {
    return axios.get(`/profile/${userId}`)
  },

  getAllUsers() {
    return axios.get('/users')
  },

  createATournament(tournament) {
    return axios.post(`/tournaments`, tournament);
  },

  getTournamentById(tournamentId) {
    return axios.get(`/tournaments/${tournamentId}`)
  },

  getTournamentByUserId(userId) {
    return axios.get(`tournaments/user/${userId}`)
  },

  getAllPlayers() {
    return axios.get('/players')
  },

  getPlayerByUsername(username) {
    return axios.get(`/players/${username}`)
  },

  createMatch(match) {
    return axios.post('/matches', match)
  },

  getPlayerIdByUsername(username) {
    return axios.get(`/playerId/${username}`)
  },

  createTournamentUser(playerId, tournamentId) {
    return axios.post(`/${playerId}/${tournamentId}`)
  },

  getMatchByTournamentIdAndRound(tournamentId, round) {
    return axios.get(`tournaments/${tournamentId}/${round}`)
  },

  getTournamentUsers(tournamentId) {
    return axios.get(`tournamentUsers/${tournamentId}`)
  },

  sendMessage(message) {
    return axios.post('/messages', message)
  },

  getMessagesByTournamentId(tournamentId) {
    return axios.get(`/tournaments/${tournamentId}/messages`)
  },

  getMessageByMessageId(messageId) {
    return axios.get(`/messages/${messageId}`)
  },

  getTournamentsParticipated(userId) {
    return axios.get(`/tournaments/participated/${userId}`)
  },

  getPlayersByTournamentId(tournamentId) {
    return axios.get(`/players/tournament/${tournamentId}`)
  },

  getTournamentTypeById(id){
    return axios.get(`tournamentType/tournaments/${id}`)
  },

  getWhisperByPlayerId(playerId) {
    return axios.get(`/whispers/${playerId}`)
  },

  givePlayerAWin(wins, playerId){
    return axios.put(`/players/${playerId}`, wins)
  }

}
