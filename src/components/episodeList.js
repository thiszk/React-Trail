import React from 'react';
import styled from "styled-components";
import { EpisodeNavigationBar } from './episodeNavigationBar';

const EpisodeButton = styled.button`
    display: block;
    color: black; 
    border: 2px;
    border-style: inset;
    border-color: yellowgreen;
    border-radius: 15px;
    margin-block: 10px;
    cursor: pointer;
    width: 200px;

    &:hover  {
        background-color: yellowgreen;
        color: white;
    }
`;

const EpisodeButtonList = styled.div`
    padding-left: 50px;
    padding-top: 30px;
    float: left;
`;

export class EpisodeList extends React.Component {
    render() {
        return (
            <EpisodeButtonList>
                <EpisodeButton>S01E01</EpisodeButton>
                <EpisodeButton>S01E02</EpisodeButton>
                <EpisodeButton>S01E03</EpisodeButton>
                <EpisodeButton>S01E04</EpisodeButton>
                <EpisodeButton>S01E05</EpisodeButton>
                <EpisodeButton>S01E06</EpisodeButton>
                <EpisodeButton>S01E07</EpisodeButton>
                <EpisodeButton>S01E08</EpisodeButton>
                <EpisodeButton>S01E09</EpisodeButton>
                <EpisodeButton>S01E10</EpisodeButton>
                <EpisodeButton>S01E11</EpisodeButton>
                <EpisodeButton>S01E12</EpisodeButton>
                <EpisodeButton>S01E13</EpisodeButton>
                <EpisodeButton>S01E14</EpisodeButton>
                <EpisodeButton>S01E15</EpisodeButton>
                <EpisodeButton>S01E16</EpisodeButton>
                <EpisodeButton>S01E17</EpisodeButton>
                <EpisodeButton>S01E18</EpisodeButton>
                <EpisodeButton>S01E19</EpisodeButton>
                <EpisodeButton>S01E20</EpisodeButton>
                <EpisodeNavigationBar />
            </EpisodeButtonList>
        )
    }
}