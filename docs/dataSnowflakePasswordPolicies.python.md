# `dataSnowflakePasswordPolicies` Submodule <a name="`dataSnowflakePasswordPolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePasswordPolicies <a name="DataSnowflakePasswordPolicies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies snowflake_password_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakePasswordPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakePasswordPoliciesLimit = None,
  on: DataSnowflakePasswordPoliciesOn = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.on">on</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#in DataSnowflakePasswordPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#like DataSnowflakePasswordPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#limit DataSnowflakePasswordPolicies#limit}

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.on"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#on DataSnowflakePasswordPolicies#on}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#starts_with DataSnowflakePasswordPolicies#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#with_describe DataSnowflakePasswordPolicies#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn">put_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOn">reset_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

###### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.application"></a>

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#application DataSnowflakePasswordPolicies#application}

---

###### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.applicationPackage"></a>

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#application_package DataSnowflakePasswordPolicies#application_package}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#database DataSnowflakePasswordPolicies#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#schema DataSnowflakePasswordPolicies#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#rows DataSnowflakePasswordPolicies#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#from DataSnowflakePasswordPolicies#from}

---

##### `put_on` <a name="put_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn"></a>

```python
def put_on(
  account: bool | IResolvable = None,
  user: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn.parameter.user"></a>

- *Type:* str

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#user DataSnowflakePasswordPolicies#user}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_on` <a name="reset_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOn"></a>

```python
def reset_on() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakePasswordPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakePasswordPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakePasswordPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakePasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference">DataSnowflakePasswordPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference">DataSnowflakePasswordPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.on">on</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference">DataSnowflakePasswordPoliciesOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.passwordPolicies">password_policies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList">DataSnowflakePasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.onInput">on_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.in"></a>

```python
in: DataSnowflakePasswordPoliciesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference">DataSnowflakePasswordPoliciesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limit"></a>

```python
limit: DataSnowflakePasswordPoliciesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference">DataSnowflakePasswordPoliciesLimitOutputReference</a>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.on"></a>

```python
on: DataSnowflakePasswordPoliciesOnOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference">DataSnowflakePasswordPoliciesOnOutputReference</a>

---

##### `password_policies`<sup>Required</sup> <a name="password_policies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.passwordPolicies"></a>

```python
password_policies: DataSnowflakePasswordPoliciesPasswordPoliciesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList">DataSnowflakePasswordPoliciesPasswordPoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.inInput"></a>

```python
in_input: DataSnowflakePasswordPoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limitInput"></a>

```python
limit_input: DataSnowflakePasswordPoliciesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.onInput"></a>

```python
on_input: DataSnowflakePasswordPoliciesOn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePasswordPoliciesConfig <a name="DataSnowflakePasswordPoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakePasswordPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakePasswordPoliciesLimit = None,
  on: DataSnowflakePasswordPoliciesOn = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.on">on</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.in"></a>

```python
in: DataSnowflakePasswordPoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#in DataSnowflakePasswordPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#like DataSnowflakePasswordPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.limit"></a>

```python
limit: DataSnowflakePasswordPoliciesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#limit DataSnowflakePasswordPolicies#limit}

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.on"></a>

```python
on: DataSnowflakePasswordPoliciesOn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#on DataSnowflakePasswordPolicies#on}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#starts_with DataSnowflakePasswordPolicies#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#with_describe DataSnowflakePasswordPolicies#with_describe}

---

### DataSnowflakePasswordPoliciesIn <a name="DataSnowflakePasswordPoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn(
  account: bool | IResolvable = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.application">application</a></code> | <code>str</code> | Returns records for the specified application. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.applicationPackage">application_package</a></code> | <code>str</code> | Returns records for the specified application package. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.application"></a>

```python
application: str
```

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#application DataSnowflakePasswordPolicies#application}

---

##### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#application_package DataSnowflakePasswordPolicies#application_package}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#database DataSnowflakePasswordPolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#schema DataSnowflakePasswordPolicies#schema}

---

### DataSnowflakePasswordPoliciesLimit <a name="DataSnowflakePasswordPoliciesLimit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#rows DataSnowflakePasswordPolicies#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#from DataSnowflakePasswordPolicies#from}

---

### DataSnowflakePasswordPoliciesOn <a name="DataSnowflakePasswordPoliciesOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn(
  account: bool | IResolvable = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.user">user</a></code> | <code>str</code> | Returns records for the specified user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.user"></a>

```python
user: str
```

- *Type:* str

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/password_policies#user DataSnowflakePasswordPolicies#user}

---

### DataSnowflakePasswordPoliciesPasswordPolicies <a name="DataSnowflakePasswordPoliciesPasswordPolicies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies()
```


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput()
```


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePasswordPoliciesInOutputReference <a name="DataSnowflakePasswordPoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplication">reset_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplicationPackage">reset_application_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_application` <a name="reset_application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplication"></a>

```python
def reset_application() -> None
```

##### `reset_application_package` <a name="reset_application_package" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplicationPackage"></a>

```python
def reset_application_package() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackageInput">application_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackage">application_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `application_package_input`<sup>Optional</sup> <a name="application_package_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackageInput"></a>

```python
application_package_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `application_package`<sup>Required</sup> <a name="application_package" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

---


### DataSnowflakePasswordPoliciesLimitOutputReference <a name="DataSnowflakePasswordPoliciesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

---


### DataSnowflakePasswordPoliciesOnOutputReference <a name="DataSnowflakePasswordPoliciesOnOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesOn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordHistory">password_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordLockoutTimeMins">password_lockout_time_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxLength">password_max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxRetries">password_max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinAgeDays">password_min_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLowerCaseChars">password_min_lower_case_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinNumericChars">password_min_numeric_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinSpecialChars">password_min_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinUpperCaseChars">password_min_upper_case_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `password_history`<sup>Required</sup> <a name="password_history" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordHistory"></a>

```python
password_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_time_mins`<sup>Required</sup> <a name="password_lockout_time_mins" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordLockoutTimeMins"></a>

```python
password_lockout_time_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_age_days`<sup>Required</sup> <a name="password_max_age_days" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_length`<sup>Required</sup> <a name="password_max_length" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxLength"></a>

```python
password_max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_retries`<sup>Required</sup> <a name="password_max_retries" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxRetries"></a>

```python
password_max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_days`<sup>Required</sup> <a name="password_min_age_days" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinAgeDays"></a>

```python
password_min_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length`<sup>Required</sup> <a name="password_min_length" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lower_case_chars`<sup>Required</sup> <a name="password_min_lower_case_chars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLowerCaseChars"></a>

```python
password_min_lower_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_numeric_chars`<sup>Required</sup> <a name="password_min_numeric_chars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinNumericChars"></a>

```python
password_min_numeric_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_special_chars`<sup>Required</sup> <a name="password_min_special_chars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinSpecialChars"></a>

```python
password_min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_upper_case_chars`<sup>Required</sup> <a name="password_min_upper_case_chars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinUpperCaseChars"></a>

```python
password_min_upper_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies">DataSnowflakePasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesPasswordPolicies
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies">DataSnowflakePasswordPoliciesPasswordPolicies</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_password_policies

dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput</a>

---



