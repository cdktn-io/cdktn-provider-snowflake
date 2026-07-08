# `dataSnowflakeStorageLifecyclePolicies` Submodule <a name="`dataSnowflakeStorageLifecyclePolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeStorageLifecyclePoliciesIn)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn"></a>

```java
public void putIn(DataSnowflakeStorageLifecyclePoliciesIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeStorageLifecyclePolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeStorageLifecyclePolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeStorageLifecyclePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStorageLifecyclePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies">storageLifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a>

---

##### `storageLifecyclePolicies`<sup>Required</sup> <a name="storageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList getStorageLifecyclePolicies();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStorageLifecyclePoliciesConfig <a name="DataSnowflakeStorageLifecyclePoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesConfig;

DataSnowflakeStorageLifecyclePoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeStorageLifecyclePoliciesIn)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

### DataSnowflakeStorageLifecyclePoliciesIn <a name="DataSnowflakeStorageLifecyclePoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesIn;

DataSnowflakeStorageLifecyclePoliciesIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}

---

### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies;

DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies.builder()
    .build();
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput;

DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput.builder()
    .build();
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature;

DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature.builder()
    .build();
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput;

DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStorageLifecyclePoliciesInOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesInOutputReference;

new DataSnowflakeStorageLifecyclePoliciesInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays">archiveForDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier">archiveTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays"></a>

```java
public java.lang.Number getArchiveForDays();
```

- *Type:* java.lang.Number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier"></a>

```java
public java.lang.String getArchiveTier();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList getSignature();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_storage_lifecycle_policies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a>

---



