# `dataSnowflakeExternalVolumes` Submodule <a name="`dataSnowflakeExternalVolumes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalVolumes <a name="DataSnowflakeExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes snowflake_external_volumes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumes;

DataSnowflakeExternalVolumes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#like DataSnowflakeExternalVolumes#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#with_describe DataSnowflakeExternalVolumes#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId"></a>

```java
public void resetId()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumes;

DataSnowflakeExternalVolumes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumes;

DataSnowflakeExternalVolumes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumes;

DataSnowflakeExternalVolumes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumes;

DataSnowflakeExternalVolumes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeExternalVolumes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeExternalVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeExternalVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes">externalVolumes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `externalVolumes`<sup>Required</sup> <a name="externalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesList getExternalVolumes();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalVolumesConfig <a name="DataSnowflakeExternalVolumesConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesConfig;

DataSnowflakeExternalVolumesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#like DataSnowflakeExternalVolumes#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/external_volumes#with_describe DataSnowflakeExternalVolumes#with_describe}

---

### DataSnowflakeExternalVolumesExternalVolumes <a name="DataSnowflakeExternalVolumesExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumes;

DataSnowflakeExternalVolumesExternalVolumes.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutput <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutput.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation;

DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation.builder()
    .build();
```


### DataSnowflakeExternalVolumesExternalVolumesShowOutput <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput;

DataSnowflakeExternalVolumesExternalVolumesShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites">allowWrites</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations">storageLocations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites"></a>

```java
public java.lang.String getAllowWrites();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList getStorageLocations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl">azureConsentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl"></a>

```java
public java.lang.String getAzureConsentUrl();
```

- *Type:* java.lang.String

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName"></a>

```java
public java.lang.String getAzureMultiTenantAppName();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount">storageGcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `storageGcpServiceAccount`<sup>Required</sup> <a name="storageGcpServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount"></a>

```java
public java.lang.String getStorageGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation">azureStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation">gcsStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation">s3CompatStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation">s3StorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations">storageAllowedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl">storageBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider">storageProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureStorageLocation`<sup>Required</sup> <a name="azureStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList getAzureStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a>

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `gcsStorageLocation`<sup>Required</sup> <a name="gcsStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList getGcsStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `s3CompatStorageLocation`<sup>Required</sup> <a name="s3CompatStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList getS3CompatStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a>

---

##### `s3StorageLocation`<sup>Required</sup> <a name="s3StorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList getS3StorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a>

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="storageAllowedLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations"></a>

```java
public java.util.List<java.lang.String> getStorageAllowedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl"></a>

```java
public java.lang.String getStorageBaseUrl();
```

- *Type:* java.lang.String

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider"></a>

```java
public java.lang.String getStorageProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn">storageAwsAccessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn">storageAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `storageAwsAccessPointArn`<sup>Required</sup> <a name="storageAwsAccessPointArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn"></a>

```java
public java.lang.String getStorageAwsAccessPointArn();
```

- *Type:* java.lang.String

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="storageAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId"></a>

```java
public java.lang.String getStorageAwsExternalId();
```

- *Type:* java.lang.String

---

##### `storageAwsIamUserArn`<sup>Required</sup> <a name="storageAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn"></a>

```java
public java.lang.String getStorageAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="storageAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn"></a>

```java
public java.lang.String getStorageAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint"></a>

```java
public java.lang.String getUsePrivatelinkEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesList <a name="DataSnowflakeExternalVolumesExternalVolumesList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesList;

new DataSnowflakeExternalVolumesExternalVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a>

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList;

new DataSnowflakeExternalVolumesExternalVolumesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_volumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference;

new DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites">allowWrites</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites"></a>

```java
public IResolvable getAllowWrites();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalVolumesExternalVolumesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a>

---



