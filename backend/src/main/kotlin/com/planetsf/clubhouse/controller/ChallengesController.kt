package com.planetsf.clubhouse.controller

import com.planetsf.clubhouse.model.Challenge
import com.planetsf.clubhouse.service.ChallengesService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("challenges")
class ChallengesController(private val challengesService: ChallengesService) {
    @GetMapping
    fun getChallenges(): List<Challenge> {
        return challengesService.getChallenges()
    }

/*    @PostMapping("/add-challenge")
    fun addChallenge(@RequestBody requestBody: AddChallengeRequest) {
        return challengesService.addChallenge(requestBody)
    }*/
}