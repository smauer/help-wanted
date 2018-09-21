import React from 'react';
import IssueItem from '../issue-item';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const issue = {
    id: 42,
    title: "foo",
    html_url: "http://localhost:1234",
    body: "bar",
    user: {
        login: "tyler.durden",
        html_url: "https://github.com"
    }
}

test('Issue Item Button Text Changes When Clicked', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />);

    //Confirm initial state
    expect(component.find('button').text()).toEqual('Show details');

    component.find('button').simulate('click');
    expect(component.find('button').text()).toEqual('Close details');

    component.find('button').simulate('click');
    expect(component.find('button').text()).toEqual('Show details');
});

test('Issue Item Displays/Hides Issue Body When Clicked', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />);
    
    //Confirm initial state
    expect(!component.exists('div#issue-body-' + issue.id)).toBe(true);

    component.find('button').simulate('click');
    expect(component.exists('div#issue-body-' + issue.id)).toBe(true);

    component.find('button').simulate('click');
    expect(!component.exists('div#issue-body-' + issue.id)).toBe(true);
});

test('Issue Item Has Title', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />)

    expect(component.find("p#issue-title-" + issue.id).text()).toEqual(issue.title);
});

test('Issue Item Has GitHub User', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />)

    expect(component.find("a#issue-user-link-" + issue.id).text()).toEqual(issue.user.login);
});

test('Issue Item Has GitHub User Link', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />)

    expect(component.find("a#issue-user-link-" + issue.id).prop('href')).toEqual(issue.user.html_url);
});

test('Issue Item Has GitHub Issue Link', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />)

    expect(component.find("a#issue-link-" + issue.id).prop('href')).toEqual(issue.html_url);
});